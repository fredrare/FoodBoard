import React from 'react'
import { Link } from 'gatsby'
import { name } from '../../strings/strings'

export default function Footer() {
    return <div className="w-full items-center bg-gray-100">
        <footer className="w-full text-gray-700">
        <div className="flex flex-col flex-wrap p-5 mx-auto md:items-center md:flex-row">
            <Link to="/" className="pr-2 lg:pr-8 lg:px-6 focus:outline-none">
                <div className="inline-flex items-center">
                    <h2 className="block p-2 text-xl font-medium tracking-tighter text-black transition duration-500 ease-in-out transform cursor-pointer hover:text-blueGray-500 lg:text-x lg:mr-8"> {name} </h2>
                </div>
            </Link>
            <nav className="flex flex-wrap items-center justify-center mx-auto text-base md:ml-auto md:mr-auto">
                <Link to="#" className="px-4 py-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md ring-offset-current ring-offset-2 hover:text-black ">Contáctanos</Link>
                <Link to="#" className="px-4 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md ring-offset-current ring-offset-2 hover:text-black ">Nuestros servicios</Link>
                <Link to="#" className="px-4 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md ring-offset-current ring-offset-2 hover:text-black ">Misión</Link>
                <Link to="#" className="px-4 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md ring-offset-current ring-offset-2 hover:text-black ">Legal</Link>
            </nav>
            <span className="inline-flex justify-center mt-2 mr-2 sm:ml-auto sm:mt-0 sm:justify-start md:ml-auto md:justify-start">
                <Link to="#" className="text-red-500 hover:text-black" title="Facebook">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                </Link>
                <Link to="#" className="ml-3 text-red-500 hover:text-black" title="Twitter">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                    </path>
                    </svg>
                </Link>
                <Link to="#" className="ml-3 text-red-500 hover:text-black" title="Instagram">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                </Link>
            </span>
        </div>
        </footer>
        <footer className="w-full px-8 rounded-b-lg bg-gray-200 flex flex-cols items-center justify-center">
            <div className="container inline-flex flex-wrap items-center px-5 py-6 mx-auto flex-row w-full">
                <h2 className="mx-auto text-xs font-semibold tracking-widest text-black uppercase title-font"> Pide y come. No te compliques más. </h2>
            </div>
        </footer>
  </div>
}