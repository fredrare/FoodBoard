import { Popover, Transition } from '@headlessui/react'
import React, { useState, createRef } from 'react'
import cart from '../../scripts/cart'


export default function Alert({name, shop, price, salePrice}) {
    const popOverButton = createRef()
    return <div className="w-full max-w-sm px-4">
        <Popover className="relative">
            {({ open }) => <>
                <Popover.Button ref={popOverButton} className="text-white group bg-red-500 rounded-lg hover:bg-yellow-200 hover:text-red-500 inline-flex items-center text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    <span 
                        className="w-full h-full px-6 py-2"
                        onClick={() => {
                            cart.addItem(name, shop, 1, salePrice || price)
                            setTimeout(() => {
                                const x = popOverButton?.current?.click()
                            }, 1000)
                            console.log('added')
                        }}
                    >
                        Agregar al carrito
                    </span>
                </Popover.Button>
                <Transition
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                >
                    <Popover.Panel className="absolute z-10 w-screen max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
                        <div className="container bg-white items-center px-5 py-5 lg:px-20">
                            <div className="w-full text-green-600 border rounded-lg shadow-xl ">
                            <div className="flex items-center justify-center px-6 py-4 mx-auto ">
                                <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" className="mr-4 icon icon-tabler icon-tabler-circle-check" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <circle cx="12" cy="12" r="9"></circle>
                                    <path d="M9 12l2 2l4 -4"></path>
                                </svg>
                                <p className="text-sm tracking-wide">
                                    El producto ha sido agregado al carrito
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </>}
        </Popover>
    </div>
}
