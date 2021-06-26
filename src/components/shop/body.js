import React from 'react'
import { ProductCard } from '../common/cards'

export default function Body ({ slug, products }) {
    return <section className="mb-20">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12">
            {products.map(product => (
                <ProductCard
                    name={product.name}
                    excerpt={product.excerpt}
                    slug={product.slug}
                    image={product.previewImage.small}
                    price={product.price}
                    shopSlug={slug}
                    key={product.slug}
                />
            ))}
        </div>
    </section>
}