import React from 'react'
import cart from '../../scripts/cart'

export default function Preface ({ name, description, price, salePrice, isNew, shop }) {
    return <section className="text-blueGray-700 ">
      <div className="container flex flex-col px-5 py-8 mx-auto items-center">
        <div className="flex flex-col w-full mb-8 text-left text-center">
          {isNew && <h2 className="mb-4 text-xs font-semibold tracking-widest text-black uppercase title-font">¡Nuevo!</h2>}
          <h1 className="mx-auto mb-6 text-2xl font-semibold leading-none tracking-tighter text-black lg:w-1/2 sm:text-6xl title-font">{name}</h1>
          <p className="mx-auto text-base font-medium leading-relaxed text-blueGray-700 lg:w-2/3">{description}</p>
          <div className="flex w-full mt-12 mx-auto items-center justify-center">
            <button
              onClick={function() {
                cart.addItem(name, shop, 1, salePrice || price)
              }}
              className="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-red-500 rounded-lg hover:bg-yellow-200 hover:text-red-500 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
              Agregar al carrito
            </button>
          </div>
          <p className="mt-6 mb-8 text-sm text-blueGray-600 lg:mx-auto lg:w-1/3 ">Precio: <span className="text-green-500">S/{price}</span></p>
        </div>
      </div>
    </section>
}
