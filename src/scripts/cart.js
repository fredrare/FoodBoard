const setItem = function (item, shop, qty, price, update=false) {
    console.log(`Item added: ${item}`)
    console.log(qty)
    const current = JSON.parse(
        localStorage.getItem(shop.id) ?? JSON.stringify({
            shopName: shop.name,
            shopSlug: shop.slug,
            items: {}
        })
    )
    if (qty) {
        current.items[item] = {
            qty: qty + (update ? 0 : parseInt(current.items[item]?.qty || 0)),
            price: price || current.items[item]?.price || 0
        }
    } else
        delete current.items[item]
    localStorage.setItem(shop.id, JSON.stringify(current))
}

export default {
    addItem: setItem,
    updateItem: (item, shop, qty, price) => setItem(item, shop, qty, price, true),
    removeItem: (item, shop) => setItem(item, shop, 0),
    getCart(shop) {
        console.log(shop)
        const current = JSON.parse(
            localStorage.getItem(shop.id) ?? JSON.stringify({})
        )
        return current
    }
}
