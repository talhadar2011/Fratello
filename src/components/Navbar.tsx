import React from 'react'
import logo from "../assets/FratelloLogoFullBlack.png"
export default function Navbar() {
    return (
        <>
            <nav className='bg-white w-auto  shadow-xl sticky'>
                <div className='flex items-center justify-around'>
                    <img className='w-40 p-5 ' src={logo} alt='fratelloLogo'></img>
                    <div className='flex gap-6 mx-auto font-medium'>
                        <h4 className='text-lg hover:underline cursor-pointer'>Home</h4>
                        <h4 className='text-lg hover:underline cursor-pointer'>Products</h4>
                        <h4 className='text-lg hover:underline cursor-pointer'>AboutUs</h4>
                        <h4 className='text-lg hover:underline cursor-pointer'>Contact</h4>

                    </div>

                </div>
            </nav>
        </>
    )
}
