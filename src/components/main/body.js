import React from 'react' 
import { ShopCard } from '../common/cards'


export default function Body ({ shops }) {
    return <section className="mb-20">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12">
            {shops.map(shop => (
                <ShopCard
                    name={shop.name}
                    excerpt={shop.excerpt}
                    slug={shop.slug}
                    image={shop.previewImage.small}
                    key={shop.id}
                />
            ))}
        </div>
    </section>
}
