import React from 'react' 

export function SearchInput({ placeholder }) {
    return (
        <div className="block px-0 py-3 border-b-2 border-transparent lg:p-4 transition-all duration-200">
            <div className="flex flex-wrap ml-auto items-en xl:flex-nowrap md:flex-nowrap lg:flex-wrap">
                <div className="relative w-40 mr-2 sm:w-auto">
                <input type="text" id="search" placeholder={placeholder ?? 'Busca algo'} className="w-full px-3 py-1 leading-8 text-black transition duration-500 ease-in-out transform rounded-lg bg-warmGray-100 ring-offset-current ring-offset-2 focus:outline-none focus:ring focus:border-white" />
                </div>
                <button className="px-6 py-2 text-white group bg-yellow-400 rounded-lg hover:bg-yellow-200 hover:text-red-500 px-3 py-2 inline-flex items-center text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-opacity-75">
                    Buscar
                </button>
            </div>
        </div>
    )
}
