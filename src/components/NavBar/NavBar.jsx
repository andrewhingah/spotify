import React from 'react';
import logo from '../../images/logo.png';
import './NavBar.css';

function NavBar() {
    return (
        <header className="main-header">
            <a href="/" className="brand-logo">
                <img src={logo} alt="logo" />
                <div className="brand-logo-name">SoundWave</div>
            </a>
            <nav className="main-nav">
                <ul>
                    <li><a href="discover.html">Discover</a></li>
                    <li><a href="join.html">Join</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;