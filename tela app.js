// App.js
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="menu-container">
      <header className="menu-header">
        <span className="back-arrow">←</span>
        <h1>MENU</h1>
        <img src="demon.jpg" alt="User Avatar" className="avatar" />
      </header>

      <div className="menu">
        <MenuItem icon="tag" label="Loja" balance="R$50,30" />
        <MenuItem icon="newspaper" label="Notícias" />
        <MenuItem icon="shield-alt" label="Steam Guard" />
        <MenuItem icon="bell" label="Notificações" />
        <MenuItem icon="check" label="Confirmações" />
        <MenuItem icon="th-large" label="Biblioteca" />
        <MenuItem icon="users" label="Comunidade" />
        <MenuItem icon="comment-dots" label="Conversa" />
        
        <div className="menu-footer">
          <FooterItem label="Enviar comentário sobre o aplicativo" />
          <FooterItem label="Configurações" />
          <FooterItem label="Suporte" />
          <FooterItem label="Baixe o aplicativo do Steam Link" />
        </div>
      </div>
    </div>
  );
}

function MenuItem({ icon, label, balance }) {
  return (
    <div className="menu-item">
      <i className={`fas fa-${icon}`} />
      <span>{label}</span>
      {balance && <span className="balance">{balance}</span>}
    </div>
  );
}

function FooterItem({ label }) {
  return <div className="footer-item">{label}</div>;
}

export default App;
