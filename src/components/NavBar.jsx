import React from 'react';
import { Link } from 'react-router-dom';
import logo_nextflix from '../image/logo_netflix.png';
import SearchBar from './SearchBar';
import s from '../css/NavBar.module.css';

export const NavBar = () => {
  return (
    <nav className={s.navbar}>
      <img src={logo_nextflix} alt="no found" width="10%"/>
      <Link to="/" className={s.link}>
        <h3 className={s.h3}>Home</h3>
      </Link>
      <SearchBar/>
    </nav>
  )
}

export default NavBar;