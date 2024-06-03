import React from "react";
import { IoBrowsersOutline, IoCalculator, IoChatbox, IoLogoReact, IoPerson } from 'react-icons/io5';

import SidebarItem from "./SidebarItem";
import Image from "next/image";


const navItems =  [
    {
      path: '/main',
      icon: <IoBrowsersOutline size={40} />,
      title: 'Dashboard',
      subTitle: 'Visualización'
    },
    {
      path: '/contact',
      icon: <IoChatbox size={40} />,
      title: 'Contact',
      subTitle: 'Información de Contacto'
    },
    {
      path: '/profile',
      icon: <IoPerson size={40} />,
      title: 'Profile',      
      subTitle: 'Perfil de Usuario'
    },
    {
      path: '/counter',
      icon: <IoCalculator size={40} />,
      title: 'Counter',
      subTitle: 'Contador Client Side'
    },
  ]; 

function Sidebar() {
  return (
    <div id="menu" 
    style={{ width: '400px' }}
    className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 h-screen overflow-y-scroll">


    <div id="logo" className="my-4 px-6">
      <h1 className="flex items-center  text-lg md:text-2xl font-bold text-white">
        <IoLogoReact className='mr-2' />
        <span> My NextJS App</span> 
      </h1>
      <p className="text-slate-500 text-sm">Manage your actions and activities</p>
    </div>


    <div id="profile" className="px-6 py-10">
      <p className="text-slate-500">Welcome back,</p>
      <a href="#" className="inline-flex space-x-2 items-center">
        <span>
          <Image className="rounded-full w-8 h-8" 
            src="https://lh3.googleusercontent.com/a/ACg8ocIvxpUJnrdLFVeQQkpnWim728w3QPZOytquNwcJnkhTSZ2tQmfLBw=s288-c-no" 
            alt="User avatar" 
            width={50}
            height={50}
          />
        </span>
        <span className="text-sm md:text-base font-bold">
          Leonardo Bustamante
        </span>
      </a>
    </div>


    <div id="nav" className="w-full px-6">
    
      {
        navItems.map( item => (
            <SidebarItem  key={ item.path } {...item} />
        ))
      }



    </div>
  </div>
);
}

export default Sidebar;
