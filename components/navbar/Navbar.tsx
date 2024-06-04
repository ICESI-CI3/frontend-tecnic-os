'use client'

import { useLogout } from '@/hooks/auth/useLogout';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { useEffect, useContext } from 'react';
import SearchComponent from "../search/SearchComponent";
import MobileMenuItem from "./MobileMenuItem";
import NavbarPrimaryItem from "./NavbarPrimaryItem";
import NavbarSecondaryItem from "./NavbarSecondaryItem";
import { UserContext } from '@/context/UserContext';


const navPrimaryItems =  [
  {
    path: '/',
    title: 'Home',
  },
  {
    path: '/Service',
    title: 'Soy un técnico',
  },
]; 

function Navbar() {
  const userContext = useContext(UserContext);
  const currentUser = userContext?.currentUser;
  const { handleLogout:logout } = useLogout();
  const router = useRouter();

  useEffect(() => {
    const btn = document.querySelector('button.mobile-menu-button');
    const menu = document.querySelector('.mobile-menu');

    if(btn && menu){
      const toggleMenu = () => {
        menu.classList.toggle('hidden');
      };

      btn.addEventListener('click', toggleMenu);

      return () => {
        btn.removeEventListener('click', toggleMenu);
      };
    }
  }, []);

  return (
    <nav className="bg-white shadow-lg">
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* Logo */}
            <div>
              <Link href="/" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                <svg className="h-6 w-6 mr-1 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.371 0 0 5.371 0 12s5.371 12 12 12 12-5.371 12-12S18.629 0 12 0zm0 21.8c-5.416 0-9.8-4.384-9.8-9.8S6.584 2.2 12 2.2 21.8 6.584 21.8 12 17.416 21.8 12 21.8z"/><path d="M10.465 16.387L5.558 11.48l1.414-1.414 3.493 3.493 7.9-7.9 1.414 1.414z"/></svg>
                <span className="font-bold">HomeNeeds</span>
              </Link>
            </div>

            {/* Primary Navbar items */}
            <div className="hidden md:flex items-center space-x-1">
              {navPrimaryItems.map(item => (
                <NavbarPrimaryItem key={item.path} {...item} />
              ))}
            </div>
          </div>

          {/* Search component */}
          <SearchComponent 
          placeholder='Busca técnicos, servicios y más...'
          redirect='/search'
          />

          {/* Secondary Navbar items */}
          
          < NavbarSecondaryItem />
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button">
              <svg className="w-6 h-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="mobile-menu hidden md:hidden bg-white">
        {navPrimaryItems.map(item => (
          <MobileMenuItem key={item.path} {...item} />
        ))}
        {currentUser ? (
          <>       
            <Link href="/profile" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200">
              Perfil
            </Link>
            <button
              onClick={() => {
                logout();
                router.push("/");
              }}
              className="block w-full text-left py-2 px-4 text-sm text-gray-700 hover:bg-gray-200"
            >
              Salir
            </button>
          </> 
        ) : (
          <>       
            <Link href="/login" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200">
              Inicia sesión
            </Link>
            <Link href="/register" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200">
              Regístrate
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
