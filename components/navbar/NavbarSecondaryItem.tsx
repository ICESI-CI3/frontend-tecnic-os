import Link from 'next/link';
import { useRouter } from "next/navigation";
import { useCurrentUser } from '@/hooks/auth/useCurrentUser';
import { useLogout } from '@/hooks/auth/useLogout';
import { useState } from 'react';

function NavbarSecondaryItem() {

    const { user: currentUser } = useCurrentUser();
    const { logout } = useLogout();
    const router = useRouter();

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className="hidden md:flex items-center space-x-1">
            {currentUser ? (
            // Si currentUser existe (es decir, el usuario ha iniciado sesión), mostrar botón circular con menú desplegable
            <div className="relative">
                <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="w-10 h-10 rounded-full bg-gray-500 text-white flex items-center justify-center"
                >
                {currentUser.username.charAt(0).toUpperCase()}
                </button>
                {menuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg py-2 z-50">
                    <Link href="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center">
                    <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A10.947 10.947 0 0112 15c2.044 0 3.947.618 5.521 1.804m-2.896-3.397A3 3 0 1015 9m0 0a3 3 0 00-3 3m3-3a3 3 0 00-3 3" />
                    </svg>
                    Profile
                    </Link>
                    <button
                    onClick={() => {
                        logout();
                        router.push("/");
                    }}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center"
                    >
                    <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Logout
                    </button>
                </div>
                )}
            </div>
            ) : (
            // Si currentUser no existe (es decir, el usuario no ha iniciado sesión), mostrar botones de inicio de sesión y registro
            <>
                <Link href="/login" className="py-2 px-3 bg-blue-500 text-white rounded hover:bg-blue-600">Ingresa</Link>
                <Link href="/register" className="py-2 px-3 bg-gray-500 text-white rounded hover:bg-gray-600">Crea tu cuenta</Link>
            </>
            )}
        </div>
    </>
    );
}


export default NavbarSecondaryItem;