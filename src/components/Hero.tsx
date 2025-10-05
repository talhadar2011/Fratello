import React from 'react'
import logo from "../assets/FratelloLogoFullWhite.webp"
import { Link } from '@tanstack/react-router'
export default function Hero() {
  return (
    <div>
        <section className="bg-gray-900 py-16 md:py-24 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            {/* Replace this with your actual image component */}
            <img 
              className="w-100 h-auto drop-shadow-md drop-shadow-indigo-400 "
              src={logo} 
              alt="Product Dashboard Screenshot"
              loading="eager" // Important for LCP optimization
            />
          </div>
 
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
              The Fabric of <span className="text-indigo-400">Healthcare.</span>
            </h1>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 mb-8">
              Designed to be worn by Heroes. 
              
              Superior comfort. Total mobility.
              We are new standard in healthcare apparel.
            </p>
            
            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link  to="/product"
                 
                className="inline-block  border border-indigo-400 bg-gray-900 hover:bg-indigo-400 text-indigo-400 hover:text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
              >
                Go To Products
              </Link>
             
            </div>

          </div>

          
        </div>
      </div>
    </section>
    </div>
  )
}
