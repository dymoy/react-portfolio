import React from 'react';
import Navigation from './Navigation';

import '../index.css';
import Logo from '../assets/icons/logo.svg';

export default function Header() {
    return (
        <header className='d-flex flex-wrap justify-content-between'> 
            {/* Present name/logo */}
            <div className='header-div'>
                <img src={Logo} alt="logo" className='logo'/>
            </div>
            {/* Present navbar with titles corresponding to different sections of the portfolio */}
            <div className='navigation my-auto'>
                <Navigation />
            </div>
        </header>
    );
}
