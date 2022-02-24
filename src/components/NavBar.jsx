import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import logo_nextflix from '../image/logo_netflix.png';
import SearchBar from './SearchBar';
import s from '../css/NavBar.module.css';
import {FaBars} from 'react-icons/fa';

export const NavBar = () => {
  const [visible, setVisible] = useState(false);

  const toggleMenu = () => {
    setVisible(!visible);
  }


  return (
    <nav className={s.navbar}>
      <button className={s.nav_toggle} onClick= {toggleMenu}><FaBars/></button>
      <img src={logo_nextflix} alt="not found" width="10%" classname={s.logo}/>
      <div className={`${s.nav_menu} ${visible ? s.nav_menu_visible : ""}`}>
      <Link to="/" className={s.link}>
        <h3 className={s.h3}>Home</h3>
      </Link>
      <Link to="/" className={s.link}>
        <h3 className={s.h3}>TV Shows</h3>
      </Link>
      <Link to="/" className={s.link}>
        <h3 className={s.h3}>Movies</h3>
      </Link>
      <Link to="/" className={s.link}>
        <h3 className={s.h3}>New & Popular</h3>
      </Link>
      <Link to="/" className={s.link}>
        <h3 className={s.h3}>My List</h3>
      </Link>
      <Link to="/" className={s.link}>
        <h3 className={s.h3}>Watch Again</h3>
      </Link>
      </div>
      <SearchBar/>
    </nav>
  )
}

export default NavBar;