import React from 'react';
import Navbar from './Navbar';

export default function Header() {
    return (
        <header> 
            {/* Present name */}
            <div className="name">
                <h1>Derek Y. Moy</h1>
            </div>
            {/* Present navbar with titles corresponding to different sections of the portfolio */}
            <Navbar />
        </header>
    );
}
