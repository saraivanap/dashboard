// Header.js
import React from 'react';
import './Header.css';
import ProfileIcon from './svg/profile.svg';

const Header = () => {
  return (
    <div className="Header">
      <div className="HeaderLeft">
        <h2> Sistema AMZ </h2>
      </div>
      <div className="HeaderRight">
      <div className="SearchTab">
          <input type="text" placeholder="Pesquisar" />
          <button>Buscar</button>
          <div className="ProfileIcon">
          <img src={ProfileIcon} alt="Ícone de Perfil" />
        </div>
      </div>
        
      </div>
    </div>
  );
}

export default Header;
