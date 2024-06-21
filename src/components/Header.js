// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-left">
                <img src="logo-url" alt="Logo" className="logo" />
                <h1>e-Mobility Power</h1>
            </div>
            <div className="header-center">
                <button>Save money</button>
                <button>Save time</button>
            </div>
            <div className="header-right">
                <select className="language-select">
                    <option>English</option>
                    {/* <!-- Add other languages here --> */}
                </select>
            </div>
        </header>
    );
};

export default Header;
