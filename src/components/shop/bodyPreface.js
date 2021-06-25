import React from 'react'
import GatsbyImage from 'gatsby-image'
import { Link } from 'gatsby'

export default function BodyPreface({ slug, name, description, image, category }) {
    const justify = {
        textAlign: 'justify'
    }
    return <section className="text-blueGray-700 ">
      <div className="container flex flex-col px-5 py-16 mx-auto lg:items-center md:flex-row lg:px-28">
        <div className="w-full mb-10 lg:w-5/6 lg:max-w-lg md:w-1/2">
          <Link to={`/${slug}`}>
            <GatsbyImage
                fluid={{
                    ...image,
                    alt: `Imagen de ${name}`,
                }}
                className="w-full h-full shadow-medium rounded object-cover"
            />
          </Link>
        </div>
        <div className="flex flex-col items-start text-left lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16">
          {category && <h2 className="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font">{ category }</h2>}
          <Link to={`/${slug}`}>
            <h1 className="mb-8 text-2xl font-bold tracking-tighter text-left text-black lg:text-5xl title-font">{name}</h1>
          </Link>
          <p className="mb-8 text-base leading-relaxed text-left text-blueGray-700" style={justify}>{ description }</p>
        </div>
      </div>
    </section>
}