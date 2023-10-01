import React from 'react';
import logo from '../assets/logo.svg';
import '../styles/header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        
        <nav className='navbar'>
            <div className='kasa-header'>
                <img src={logo} alt='Logo Kasa' className='kasa-logo' />
            </div>
            <div className='menu'>
                <ul>
                    <Link to="/" className='menu1'>Accueil</Link>
                    <Link to="/about" className='menu2'>A propos</Link>
                </ul>
            </div>
        </nav>
        
    )
}

export default Header