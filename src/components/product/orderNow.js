import React from 'react' 

export default function OrderNow({ items, phone }) {
    const genLine = (name, qty) => `${qty}x ${name}`
    const message = `¡Hola! Quisiera solicitar estos productos desde FoodBoard:
${Object.keys(items || {}).map(x => genLine(x, items[x].qty)).join('\n')}
Agradecería que me dijeran cómo puedo pagar y cómo sería la entrega. ¡Muchas gracias!`
    const destination = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    return <section className="w-full mb-20">
        {Object.keys(items || {}).length && <div className="flex w-full mt-12 mx-auto items-end justify-end">
            <button
              className="flex items-center mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-red-500 rounded-lg hover:bg-yellow-200 hover:text-red-500 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
              <a href={destination} className="px-6 py-2 w-full h-full" target="_blank" rel="noreferrer" alt="Pide por Whatsapp"><span>¡Pedir ya!</span></a>
            </button>
          </div>}
    </section>
}