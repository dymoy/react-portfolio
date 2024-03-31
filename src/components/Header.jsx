import React from 'react';
import Navigation from './Navigation';
import '../index.css';
import Logo from '../assets/icons/logo.svg';

export default function Header() {
    return (
        <header> 
            {/* Present name */}
            <img src={Logo} alt="logo" className='logo'/>
            {/* Present navbar with titles corresponding to different sections of the portfolio */}
            <Navigation />
        </header>
    );
}
