// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-left">
                <h1>e-Mobility Power</h1>
            </div>
            <div className="header-right">
                <button>Save money</button>
                <button>Save time</button>
                <select>
                    <option>English</option>
                    {/* <!-- Add other languages here --> */}
                </select>
            </div>
        </header>
    );
};

export default Header;
