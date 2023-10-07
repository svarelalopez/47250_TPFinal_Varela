import React from 'react';
import './NavBar.css';
import CardWidget from '../CardWidget/CardWidget';

const NavBar = () => {
  return (
 <header>
    <h1>Baldo de Boldo</h1>

    <nav>
        <ul>
            <li>Yerbas</li>
            <li>Materas</li>
            <li>Mates</li>
            <li>Bombillas</li>
            <li>Termos</li>
            <li>Elementos sorpresa</li>
        </ul>
    </nav>
    <CardWidget/>
 </header>
  )
}

export default NavBar