import React from 'react';
import './NavBar.css';
import CardWidget from '../CardWidget/CardWidget';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
 <header>
    <Link to="/"> <h1>Baldo de Boldo</h1> </Link>

    <nav>
        <ul>
            <li><NavLink to="categoria/2">Yerbas</NavLink></li>
            <li><NavLink to="categoria/2">Materas</NavLink></li>
            <li><NavLink to="categoria/2">Mates</NavLink></li>
            <li><NavLink to="categoria/3">Bombillas</NavLink></li>
            <li><NavLink to="categoria/3">Termos</NavLink></li>
            <li><NavLink to="categoria/3">Elementos sorpresa</NavLink></li>
        </ul>
    </nav>
    <CardWidget/>
 </header>
  )
}

export default NavBar