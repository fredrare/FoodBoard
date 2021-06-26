import React from 'react'
import Alert from '../cart/alert'

export default function Preface ({ name, description, price, salePrice, isNew, shop }) {
    return <section className="text-blueGray-700 ">
      <div className="container flex flex-col px-5 py-8 mx-auto items-center">
        <div className="flex flex-col w-full mb-8 text-left text-center">
          {isNew && <h2 className="mb-4 text-xs font-semibold tracking-widest text-black uppercase title-font">¡Nuevo!</h2>}
          <h1 className="mx-auto mb-6 text-2xl font-semibold leading-none tracking-tighter text-black lg:w-1/2 sm:text-6xl title-font">{name}</h1>
          <p className="mx-auto text-base font-medium leading-relaxed text-blueGray-700 lg:w-2/3">{description}</p>
          <div className="flex w-full mt-12 mx-auto items-center justify-center">
            <Alert shop={shop} name={name} price={price} salePrice={salePrice} />
          </div>
          <p className="mt-6 mb-8 text-sm text-blueGray-600 lg:mx-auto lg:w-1/3 ">Precio: <span className="text-green-500">S/{price}</span></p>
        </div>
      </div>
    </section>
}
