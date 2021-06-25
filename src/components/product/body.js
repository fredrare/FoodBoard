import React from 'react'
import Gallery from './gallery'

export default function Body ({ preview, gallery, name }) {
    return  <section className="mb-20 w-full">
        <div className="w-full">
            <Gallery 
                alt={name}
                main={preview.small}
                images={gallery.map(x => x.small)}
            />
        </div>
    </section>
}
