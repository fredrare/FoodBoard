import React, {useState, useEffect} from 'react' 
import cart from '../../scripts/cart'
import OrderNow from './orderNow'
import { Link } from 'gatsby'

export default function Cart ({ shop }) {
    const tempItems = cart.getCart(shop)?.items
    const tempKeys = Object.keys(tempItems || {}).sort()
    const tempSubtotal = tempKeys.reduce((acum, curr) => acum + tempItems[curr].qty * tempItems[curr].price, 0)

    const [items, setItems] = useState(tempItems)
    const [keys, setKeys] = useState(tempKeys)
    const [subtotal, setSubtotal] = useState(tempSubtotal)

    useEffect(() => {
        setKeys(Object.keys(items || {}).sort())
    }, [items])

    useEffect(() => {
        setSubtotal(keys.reduce((acum, curr) => acum + items[curr].qty * items[curr].price, 0))
    }, [keys])

    return <section>
        <div className="h-screen">
            <div className="py-12">
                <div className="max-w-md mx-auto bg-gray-50 shadow-lg rounded-lg md:max-w-5xl">
                    <div className="md:flex ">
                        <div className="w-full p-4 px-5 py-5">
                            <div className="md:grid md:grid-cols-3 gap-2 ">
                                <div className="col-span-3 p-5">
                                    <h1 className="text-xl font-medium ">Carrito en {shop.name}</h1>
                                    {keys.length ? keys.map(item => <div className="flex justify-between items-center mt-6 pt-6 border-t">
                                        <div className="flex items-center"> <img src="https://i.imgur.com/xbTAITF.jpg" width="60" className="rounded-full " alt="img"/>
                                            <div className="flex flex-col ml-3 "> <span className="text-md font-medium">{item}</span></div>
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <div className="pr-8 flex"> <span className="font-semibold" onClick={() => {
                                                console.log('click')
                                                cart.updateItem(item, shop, parseInt(items[item].qty) - 1, items[item].price, true)
                                                setItems(cart.getCart(shop)?.items)
                                            }}>-</span>
                                            <input type="text" className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2" value={items[item]?.qty}/>
                                            <span className="font-semibold" onClick={() => {
                                                console.log('click')
                                                cart.updateItem(item, shop, parseInt(items[item].qty) + 1, items[item].price, true)
                                                setItems(cart.getCart(shop)?.items)
                                            }}>+</span> </div>
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
                <OrderNow items={items} phone={shop.phone}/>
            </div>
        </div>
    </section>
}