"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';

import style from './ActiveLink.module.css'

interface Props {
  path: string;
  text: string;
}

function ActiveLink({path, text}: Props) {

  const pathName = usePathname();  
  return (
    <Link key={path} className={ `${style.link} ${(pathName==path) && style['active-link'] }` } href={path}>
    {text}
  </Link>  )
}

export default ActiveLink