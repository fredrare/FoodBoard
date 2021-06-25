import React from "react"
import { TailwindNavbar } from "tailwind-navbar-react"
import { Link } from "gatsby"
import { SearchInput } from "../common/inputs"
import { name } from '../../strings/strings'

export default function Header() {
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
            </ul>
        </nav>
    </TailwindNavbar>
}