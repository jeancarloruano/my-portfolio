"use client"
import {BsFillMoonStarsFill} from 'react-icons/bs'
import { useState } from 'react'

const navClassName = "py-2 mb-10 flex justify-between"
const h1ClassName = "text-xl dark:text-white"
const ulClassName = "flex items-center"
const liClassName = "transition duration-100 ease-in-out hover:scale-105"
const logoClassName = "cursor-pointer text-2xl transition duration-100 ease-in-out hover:text-yellow-500 dark:text-white dark:hover:text-yellow-500"
const linkClassName = "bg-gradient-to-r from-cyan-500 to-teal-500 text-gray-100 px-4 py-2 rounded-xl ml-8 transition duration-200 ease-in-out hover:text-gray-800 dark:text-gray-800 dark:hover:text-white"
const linkTextClassName = "px-1"
var theme = "Light"

export default function NavBar() {
  return (
    <nav className={navClassName}>
        {/*<h1 className={h1ClassName}>Portfolio by JC</h1>
        <ul className={ulClassName}>
          <li className={liClassName}>
            <BsFillMoonStarsFill onClick={() => theme = "Dark"} className={logoClassName}/>
          </li>
           <li className={liClassName}>
            <a className={linkClassName} href="">Resume</a>
          </li>
        </ul>*/}
      </nav>
  )
}