// src/App.jsx
import { useState, useEffect } from "react";
import * as THREE from "three";
import './App.css'; // 保留之前 Vue 的 CSS

// ======== NavBar Component ========
function NavBar({ currentScreen, setScreen }) {
  return (
    <div className="nav-bar">
      <div className={`nav-item ${currentScreen === 'home' ? 'active' : ''}`} onClick={() => setScreen('home')}>
        <i className="ph-fill ph-house"></i> Home
      </div>
      <div className={`nav-item ${currentScreen === 'explore' ? 'active' : ''}`} onClick={() => setScreen('explore')}>
        <i className="ph-fill ph-compass"></i> Explore
      </div>
      <div className="nav-fab" onClick={() => setScreen('add')}>
        <i className="ph-bold ph-plus"></i>
      </div>
      <div className={`nav-item ${currentScreen === 'library' ? 'active' : ''}`} onClick={() => setScreen('library')}>
        <i className="ph-fill ph-books"></i> Library
      </div>
      <div className={`nav-item ${currentScreen === 'profile' ? 'active' : ''}`} onClick={() => setScreen('profile')}>
        <i className="ph-fill ph-user"></i> Profile
      </div>
    </div>
  );
}

// ======== Home Screen ========
function Home({ setScreen }) {
  return (
    <div className="screen">
      <div className="header">
        <div style={{ fontWeight: 800, fontSize: 22, letterSpacing: -0.5 }}>Weave</div>
        <div style={{ width: 36, height: 36, background: '#e0f5f2', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#007a65', fontWeight: 'bold', fontSize: 12 }}>JD</div>
      </div>
      <div className="scroll-area">
        <div className="card" style={{ background: '#004d40', color: 'white', border: 'none', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: -30, right: -30, width: 120, height: 120, background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}></div>
          <div style={{ fontSize: 11, opacity: 0.8, fontWeight: 800, letterSpacing: 1, marginBottom: 8 }}>DAILY STORY</div>
          <h2 style={{ margin: 0, marginBottom: 10, fontSize: 26, lineHeight: 1.2 }}>The Architect's Dilemma</h2>
          <p style={{ fontSize: 15, opacity: 0.8, lineHeight: 1.5, marginBottom: 24 }}>
            Contextualizing: <strong>Structure</strong>, <strong>Facade</strong>, and <strong>Juxtaposition</strong>.
          </p>
          <button className="btn" style={{ background: 'white', color: '#004d40' }} onClick={() => setScreen('story')}>
            <i className="ph-fill ph-book-open"></i> Read & Review
          </button>
        </div>
      </div>
    </div>
  );
}

// ======== Profile Screen (含 Three.js) ========
function Profile() {
  useEffect(() => {
    const container = document.getElementById("three-container");
    if(!container) return;
    container.innerHTML = "";
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1f24);
    scene.fog = new THREE.FogExp2(0x1a1f24, 0.05);

    const camera = new THREE.PerspectiveCamera(50, width/height, 0.1, 1000);
    camera.position.z = 25;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(0.3,16,16);
    const material = new THREE.MeshBasicMaterial({ color: 0x00a389 });
    const nodes = [];

    for(let i=0;i<40;i++){
      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.set((Math.random()-0.5)*20, (Math.random()-0.5)*15, (Math.random()-0.5)*15);
      sphere.userData = { vx: (Math.random()-0.5)*0.02, vy: (Math.random()-0.5)*0.02 };
      scene.add(sphere);
      nodes.push(sphere);
    }

    const animate = () => {
      requestAnimationFrame(animate);
      scene.rotation.y += 0.001;
      nodes.forEach(n=>{
        n.position.x += n.userData.vx;
        n.position.y += n.userData.vy;
        if(n.position.x>10||n.position.x<-10) n.userData.vx*=-1;
        if(n.position.y>8||n.position.y<-8) n.userData.vy*=-1;
      });
      renderer.render(scene,camera);
    };
    animate();
  }, []);

  return (
    <div className="screen">
      <div className="header">
        <div style={{ fontWeight: 700, fontSize: 20 }}>Profile</div>
        <button className="btn-ghost"><i className="ph ph-gear" style={{ fontSize: 24 }}></i></button>
      </div>
      <div className="scroll-area">
        <div style={{ textAlign:'center', marginBottom:24 }}>
          <div style={{ width:88, height:88, background:'#e0f5f2', borderRadius:'50%', margin:'0 auto 12px', display:'flex', alignItems:'center', justifyContent:'center', color:'#007a65', fontSize:36, fontWeight:800 }}>JD</div>
          <h2 style={{ margin:0, marginBottom:4 }}>John Doe</h2>
          <p style={{ fontSize:14, color:'#666', margin:0 }}>Level 5 Scholar</p>
        </div>
        <div className="card" style={{ padding:0, overflow:'hidden', background:'#1a1f24', border:'none' }}>
          <div style={{ padding:16, borderBottom:'1px solid #333', display:'flex', justifyContent:'space-between', color:'white' }}>
            <span style={{ fontWeight:700, fontSize:13, letterSpacing:0.5 }}>KNOWLEDGE WEB</span>
            <span style={{ fontSize:12, opacity:0.7 }}>124 Nodes</span>
          </div>
          <div id="three-container" style={{ width:'100%', height:'260px' }}></div>
        </div>
      </div>
    </div>
  );
}

// ======== Explore / Add / Library / Story / Quiz 简单占位 ========
const Placeholder = ({ title }) => (
  <div className="screen"><div className="header"><div style={{fontWeight:700}}>{title}</div></div></div>
);

// ======== App.jsx ========
export default function App() {
  const [currentScreen, setCurrentScreen] = useState("home");

  return (
    <div id="app">
      {currentScreen === 'home' && <Home setScreen={setCurrentScreen} />}
      {currentScreen === 'explore' && <Placeholder title="Explore" />}
      {currentScreen === 'add' && <Placeholder title="Add" />}
      {currentScreen === 'library' && <Placeholder title="Library" />}
      {currentScreen === 'profile' && <Profile />}
      {currentScreen === 'story' && <Placeholder title="Story" />}
      {currentScreen === 'quiz' && <Placeholder title="Quiz" />}

      <NavBar currentScreen={currentScreen} setScreen={setCurrentScreen} />
    </div>
  );
}
