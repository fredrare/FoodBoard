import React from 'react' 
import { ShopCard } from '../common/cards'


export default function Body ({ shops }) {
    const shops2 = [...shops, ...shops, ...shops]
    return <section className="mb-20">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12">
            {shops2.map(shop => (
                <ShopCard
                    name={shop.name}
                    excerpt={shop.excerpt}
                    slug={shop.slug}
                    image={shop.previewImage.small}
                />
            ))}
        </div>
    </section>
}
