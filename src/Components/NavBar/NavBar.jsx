import React from 'react';
import CardWidget from '../CardWidget/CardWidget';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
 <header>
    <Link to="/"> <h1>Baldo de Boldo</h1> </Link>

    <nav>
        <ul>
            <li><NavLink to="categoria/2">Yerbas</NavLink></li>
            <li><NavLink to="categoria/3">Yerbas especiales</NavLink></li>

        </ul>
    </nav>
    <CardWidget/>
 </header>
  )
}

export default NavBar