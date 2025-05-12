// src/components/ChatSoporte.tsx
import React from 'react';
import './soportechat.css';

const ChatSoporte: React.FC = () => {
  return (
    <div className="chat-container">
      <img src="/pildoras-izq.png" className="decoracion izquierda" alt="decoración izquierda" />
      <img src="/pildoras-der.png" className="decoracion derecha" alt="decoración derecha" />

      <div className="chat-header">
        <button className="btn-secundario">📘 Soporte</button>
        <h2>Soporte Tecnico</h2>
        <div className="iconos-superiores">
          <span>🔔</span>
          <span>👤</span>
          <span>⚕️</span>
        </div>
      </div>

      <div className="chat-cuerpo">
        <button className="btn-primario">Solicitar ayuda vía telefónica</button>
        <button className="btn-primario">🇨🇴 +57</button>
        <textarea placeholder="Denos una breve descripción de su problema..."></textarea>
        <button className="btn-enviar">ENVIAR</button>
      </div>
    </div>
  );
};

export default ChatSoporte;

