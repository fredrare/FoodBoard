import React, {useState, useEffect} from 'react' 
import cart from '../../scripts/cart'
import OrderNow from '../product/orderNow'
import { Link } from 'gatsby'

export default function Cart ({ shop }) {
    const [items, setItems] = useState(cart.getCart(shop)?.items)
    const [keys, setKeys] = useState([])
    const [subtotal, setSubtotal] = useState(0)

    useEffect(() => {
        const tempKeys = Object.keys(items || {}).sort()
        setKeys(tempKeys)
        setSubtotal(tempKeys.reduce((acum, curr) => acum + items[curr].qty * items[curr].price, 0))
    }, [items])

    const clickable = {
        cursor: 'pointer'
    }

    return <section>
        <div className="h-screen">
            <div className="py-12">
                <div className="max-w-md mx-auto bg-gray-50 shadow-lg rounded-lg md:max-w-5xl">
                    <div className="md:flex ">
                        <div className="w-full p-4 px-5 py-5">
                            <div className="md:grid md:grid-cols-3 gap-2 ">
                                <div className="col-span-3 p-5">
                                    <h1 className="text-xl font-medium ">Carrito en {shop.name}</h1>
                                    {keys.length ? keys.map(item => <div className="flex justify-between items-center mt-6 pt-6 border-t" key={item}>
                                        <div className="flex items-center"> <img src="https://i.imgur.com/xbTAITF.jpg" width="60" className="rounded-full " alt="img"/>
                                            <div className="flex flex-col ml-3 "> <span className="text-md font-medium">{item}</span></div>
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <div className="pr-8 flex"> <span className="font-semibold" onClick={() => {
                                                cart.updateItem(item, shop, parseInt(items[item].qty) - 1, items[item].price, true)
                                                setItems(cart.getCart(shop)?.items)
                                            }} style={clickable}>-</span>
                                            <span className="focus:outline-none bg-gray-100 border h-6 rounded text-sm px-2 mx-2">{items[item]?.qty}</span>
                                            <span className="font-semibold" onClick={() => {
                                                cart.updateItem(item, shop, parseInt(items[item].qty) + 1, items[item].price, true)
                                                setItems(cart.getCart(shop)?.items)
                                            }} style={clickable}>+</span> </div>
                                            <div className="pr-8"> <span className="text-xs font-medium">S/{items[item]?.price}</span> </div>
                                            <div> <i className="fa fa-close text-xs font-medium"></i> </div>
                                        </div>
                                    </div>) : "No hay productos en el carrito..."}
                                    
                                    <div className="flex justify-between items-center mt-6 pt-6 border-t">
                                        <div className="flex items-center"> <i className="fa fa-arrow-left text-sm pr-2"></i> <span className="text-md font-medium text-blue-500">
                                            <Link to={`/${shop.slug}`}>Continúa comprando</Link>
                                        </span> </div>
                                        <div className="flex justify-center items-end"> <span className="text-sm font-medium text-gray-400 mr-1">Subtotal:</span> <span className="text-lg font-bold text-gray-800 "> S/{subtotal}</span> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-md mx-auto md:max-w-5xl">
                    <OrderNow items={items} phone={shop.phone}/>
                </div>
            </div>
        </div>
    </section>
}