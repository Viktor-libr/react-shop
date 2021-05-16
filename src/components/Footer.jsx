import React from 'react';

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-info">
                <span className='footer-copy'>© {new Date().getFullYear()} Copy text</span>
                <a className="footer-href" href="https://github.com/Viktor-libr/react-shop" target='_blanc'>repo</a>
            </div>
        </footer>
    )
}