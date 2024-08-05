import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';

const NavBar: React.FC = () => {
    const { isAuthenticated, logout } = useAuth();
    const router = useRouter();

    const handleLogout = () => {
        logout();
        router.push('/login');
    };

    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                {isAuthenticated && (
                    <li>
                        <a onClick={handleLogout} style={{ cursor: 'pointer' }}>Logout</a>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default NavBar;
