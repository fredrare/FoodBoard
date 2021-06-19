import React from 'react'

export default function Preface() {
    return   <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-wrap w-full">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Restaurantes</h1>
            <div className="h-1 w-20 bg-red-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Mira cuáles son los restaurantes en tendencia en tu zona.</p>
        </div>
    </div>
}