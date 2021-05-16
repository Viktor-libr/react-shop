import React from 'react';

export function Header () {
    return (
        <nav className='brown'>
            <div className="nav-wrapper">
                <a href="/" className="brand-logo">Shop App</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="https://github.com/Viktor-libr/react-shop">Repo</a></li>
                </ul>
            </div>
        </nav>
    )
}