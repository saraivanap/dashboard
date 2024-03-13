import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <Card className="Sidebar">
      <Card.Body>
        <ul>
          <li><Link to="/pagina_inicial">Área Legal</Link></li>
          <li><Link to="/pagina_inicial">Comunidade Ativa</Link></li>
          <li><Link to="/pagina_inicial">Empreendedor Ativo</Link></li>
          <li><Link to="/pagina_inicial">Empresa Econsciente</Link></li>
          <li><Link to="/pagina_inicial">Produtor Sustentável</Link></li>
          <li><Link to="/pagina_inicial">Governança ESG+ INOVAÇÃO</Link></li>
          <li><Link to="/pagina_inicial">Resultado</Link></li>
          {/* adicionar links */}
        </ul>
        <div className="SidebarBottom">
          <button className="LogoutButton">sair</button>
        </div>
        <h3>© NPCA</h3>
      </Card.Body>
    </Card>
  );
}

export default Sidebar;
