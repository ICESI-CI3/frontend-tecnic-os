import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";


interface Props {
    path: string,
    title: string
  }
  
  function NavbarPrimaryItem({ path, title }: Props) {
    const currentPath = usePathname();
  
    return (
        <Link href={path}
        className={`py-5 px-3 flex items-center space-x-2 rounded-md 
        ${currentPath === path ? 'bg-blue-500 text-white shadow-lg' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'}`}>
        
        <span>{title}</span>
        </Link>
    );
  }
  
  export default NavbarPrimaryItem;
