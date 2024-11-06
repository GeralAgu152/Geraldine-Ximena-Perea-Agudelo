import React from 'react';
import './header.css'
import logo from '../../assets/logo1-1.png'
import logo_dark from '../../assets/logo-d.png'
import search_icon_light from '../../assets/search-w.png'
import search_icon_dark from '../../assets/search-b.png'
import play_icon_light from '../../assets/play-w.png'
import play_icon_dark from '../../assets/play-b.png'
import toogle_light from '../../assets/night.png'
import toogle_dark from '../../assets/day.png'

const Header = ({theme, setTheme}) => {

  const toggle_mode =() =>{
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <div className='header'>
      
      <img src={theme == 'light' ? logo : logo_dark} alt='' className='logo'/>

      <ul>
        <li>Aprende</li>
        <li>Recursos</li>
        <li>Herramientas</li>

      </ul>

      <div className='search-box'> {/*boton de busqueda*/}
        <input type='text' placeholder='Search'></input>
        <img src={theme == 'light' ? search_icon_light : search_icon_dark} alt=''></img>
      </div>

      <div className='play'> {/*boton de jugar*/}
      <img src={theme === 'light' ? play_icon_light : play_icon_dark} alt='' />
        <button>
          JUEGA
        </button>
      </div>

      <img onClick={() => {toggle_mode()}} src={theme == 'light' ? toogle_light : toogle_dark} alt='' className='toggle-icon'></img> {/*Opción de modo oscuro-claro*/}

      
    </div>
  );
};

export default Header;
