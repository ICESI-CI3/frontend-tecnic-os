import React from 'react';
import Navbar from '../../components/adminNavbar/navbar';

export default function GeneralLayout({children}: {children: React.ReactNode;}) 
{
     return (
       <>  
         <Navbar/>
         { children }
       </>
     );
   } 
