import '../styles/globals.css';
import { AppProps } from 'next/app';
import { AuthProvider } from '../context/AuthContext';
import NavBar from '../components/NavBar';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AuthProvider>
            <NavBar />
            <Component {...pageProps} />
        </AuthProvider>
    );
}

export default MyApp;
