import React from 'react';
import Navigation from './Navigation';
import '../index.css';
import Logo from '../assets/icons/logo.svg';
import { useLocation } from 'react-router-dom';

const isHome = () => {
    return (useLocation().pathname == '/');
}

export default function Header() {
    return (
        <header className='d-flex flex-wrap justify-content-between'> 
            {/* Present name */}
            <div className='header-div'>
                <img src={Logo} alt="logo" className='logo'/>
                <h1 id="header-name" className={ 
                    'm-0' + 
                    (isHome() ? ' is-home' : '')
                }>Derek Moy</h1>
            </div>
            {/* Present navbar with titles corresponding to different sections of the portfolio */}
            <div className='navigation my-auto'>
                <Navigation />
            </div>
        </header>
    );
}
