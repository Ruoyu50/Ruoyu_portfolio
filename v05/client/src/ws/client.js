let ws;
export const initWS = (url, onMessage) => {
  ws = new WebSocket(url);
  ws.onmessage = (event) => onMessage(event.data);
  ws.onopen = () => console.log("WS connected");
  ws.onclose = () => console.log("WS closed");
};
export const sendWS = (msg) => {
  if(ws?.readyState === WebSocket.OPEN) ws.send(msg);
};
