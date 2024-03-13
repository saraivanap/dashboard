import React from 'react';
import './Header.css';
import ProfileIcon from './svg/profile.svg';

const Header = () => {
  return (
    <div>
      <div className="Header">
        <div className="HeaderLeft">
          <h2><img src={"/public/amz.png"} alt="Sistema AMZ"/></h2>
        </div>
        <div className="HeaderRight">
          <div className="SearchTab">
            <button>salvar rascunho</button>
            <button>download</button>
            <div className="ProfileIcon">
              <img src={ProfileIcon} alt="Ícone de Perfil" />
            </div>
          </div>
        </div>
      </div>
      {/* separador */}
      <hr className="Separator" />
    </div>
  );
}

export default Header;
