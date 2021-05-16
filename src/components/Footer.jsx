import React from 'react';

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-info">
                <span className='footer-copy'>© {new Date().getFullYear()} Copy text</span>
                <a className="footer-href" href="#!">repo</a>
            </div>
        </footer>
    )
}