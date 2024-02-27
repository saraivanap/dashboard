import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <Card className="Sidebar">
      <Card.Body>
        <ul>
          <li><Link to="/pagina_inicial">Requisito 1</Link></li>
          <li><Link to="/pagina_inicial">Requisito 2</Link></li>
          <li><Link to="/pagina_inicial">Resultado</Link></li>
          {/* Adicione mais links conforme necessário */}
        </ul>
        <div className="SidebarBottom">
          <button className="LogoutButton">Sair</button>
        </div>
        <h3>© NPCA</h3>
      </Card.Body>
    </Card>
  );
}

export default Sidebar;
