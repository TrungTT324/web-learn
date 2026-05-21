import React from 'react';
import './globals.css';

const Layout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <header>
                    <h1>Header</h1>
                </header>
                <main>{children}</main>
                <footer>
                    <p>Footer</p>
                </footer>
            </body>
        </html>
    );
};

export default Layout;