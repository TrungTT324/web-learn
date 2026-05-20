import React from 'react';
import './globals.css';

const Layout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <header>
                    <h1>My Next.js App</h1>
                </header>
                <main>{children}</main>
                <footer>
                    <p>© 2023 My Next.js App</p>
                </footer>
            </body>
        </html>
    );
};

export default Layout;