import React from "react"
import { TailwindNavbar } from "tailwind-navbar-react"
import { Link } from "gatsby"
import { SearchInput } from "../common/inputs"
import { name } from '../../strings/strings'
import cart from '../../scripts/cart'

export default function Header({ shop }) {
    let cartSection = null
    if (shop) {
        const items = cart.getCart(shop)?.items || {}
        const qty = Object.keys(items).reduce((acum, curr) => acum + items[curr].qty, 0)
        cartSection = (shop && <Link to={`/${shop.slug}/cart`}>
            <div className="flex flex-row-reverse ml-2 w-full">
                <div slot="icon" className="relative">
                    <div className="absolute text-xs rounded-full -mt-1 -mr-2 px-1 top-0 right-0 bg-yellow-200 text-red-500">+</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-shopping-cart w-6 h-6 mt-2">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                </div>
            </div>
        </Link>)
    }
    const links = [
        {
            name: "Restaurantes",
            link: "#"
        },
        {
            name: "Postres",
            link: "#"
        },
        {
            name: "Cafetería",
            link: "#"
        },
        {
            name: "Contáctanos",
            link: "#"
        }
    ]
    
    return <TailwindNavbar
        brand={<Link to="/">
            <h1 className="block p-2 text-xl font-medium tracking-tighter text-white transition duration-500 ease-in-out transform cursor-pointer lg:text-x lg:mr-8">{name}</h1>
        </Link>}
        className="py-1 bg-red-500 flex flex-wrap w-full shadow-small"
    >
        <nav>
            <ul className="items-center justify-between text-base lg:flex pt-0">
                {links.map(x => (
                    <li>
                        <Link to={x.link} className="block px-0 py-3 border-b-2 border-transparent lg:p-4 hover:border-yellow-200 transition-all duration-200">
                            {x.name}
                        </Link>
                    </li>
                ))}
                <li>
                    <SearchInput placeholder="Buscar"/>
                </li>
                {cartSection && <li>{cartSection}</li>}
            </ul>
        </nav>
    </TailwindNavbar>
}