import React from 'react' 
import { Link } from 'gatsby'
import GatsbyImage from 'gatsby-image'

export function ShopCard ({ name, image, slug, isNew, excerpt }) {

    return <div className="bg-gray-50 overflow-hidden shadow-md rounded-lg w-80 md:w-80 sm:w-80 pb-5 cursor-pointer m-auto scale-100 hover:scale-95 hover:shadow-lg">
        <Link to={`/tienda/${slug}`} className="w-full block h-full">
            <GatsbyImage
                fluid={{
                    ...image,
                    alt: `Imagen de ${name}`,
                }}
                className="max-h-60 w-full h-full object-cover"
            />
            <div className="w-full p-4">
                {isNew && <p className="text-indigo-500 text-md font-medium">
                    Nuevo
                </p>}
                <p className="text-gray-900 text-lg font-medium mb-2">
                    {name}
                </p>
                <p className="text-gray-900 dark:text-gray-300 font-light text-md">
                    {excerpt}
                </p>
            </div>
        </Link>
    </div>
}

export function ProductCard ({ name, image, slug, isNew, price, excerpt }) {
    return null
}
