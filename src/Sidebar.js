// Sidebar.js
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <Card className="Sidebar">
      <Card.Body>
        <ul>
          <li><Link to="/pagina_inicial">requisito 1</Link></li>
          <li><Link to="/pagina_inicial">requisito 2</Link></li>
          <li><Link to="/pagina_inicial">Resultado</Link></li>
          {/* Adicione mais links conforme necessário */}
        </ul>
      </Card.Body>
    </Card>
  );
}

export default Sidebar;
