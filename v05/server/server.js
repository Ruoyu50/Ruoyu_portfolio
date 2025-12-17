// server.js
const WebSocket = require('ws');

// 创建 WebSocket 服务端，监听端口 8080
const wss = new WebSocket.Server({ port: 3001 });

let clients = [];

wss.on('connection', (ws) => {
  console.log('客户端已连接');
  clients.push(ws);

  // 给新连接的客户端发送欢迎消息
  ws.send(JSON.stringify({ type: 'welcome', message: '连接成功' }));

  // 接收客户端消息
  ws.on('message', (message) => {
    try {
      const data = JSON.parse(message);
      console.log('收到消息:', data);

      // 简单广播给其他客户端（除了自己）
      clients.forEach(client => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify(data));
        }
      });
    } catch (err) {
      console.error('消息解析错误:', err);
    }
  });

  // 断开连接
  ws.on('close', () => {
    console.log('客户端已断开');
    clients = clients.filter(client => client !== ws);
  });

  ws.on('error', (err) => {
    console.error('连接出错:', err);
  });
});

console.log('WebSocket 服务器已启动，端口 3001');
