import React from 'react'
import logo from "../assets/FratelloLogoFullBlack.png"
export default function Navbar() {
  return (
    <>
        <nav className='bg-gray-200 w-auto  shadow-xl'>
           <div>
            <img className='w-40 p-5' src={logo}alt=''></img>
           </div> 
        </nav>
    </>
  )
}
