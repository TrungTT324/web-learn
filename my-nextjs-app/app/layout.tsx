import React from 'react';
import './globals.css';

export const metadata = {
    title: 'TechVision - Software Solutions',
    description: 'Innovative software solutions for your business',
};

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <html lang="en">
            <body>
                <main>{children}</main>
            </body>
        </html>
    );
}