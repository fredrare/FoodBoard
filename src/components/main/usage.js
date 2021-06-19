import React from 'react' 

export default function Usage() {
    return <section class="text-gray-600 body-font">
        <div class="container px-5 py-15 mx-auto">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">Pide comida con FoodBoard
            <br class="hidden sm:block" />¡Es muy fácil!
            </h1>
            <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div class="p-4 md:w-1/3 flex">
                <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-yellow-200 text-red-500 transition duration-300 hover:bg-red-500 hover:text-white mb-4 flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.9996 15.2877L15.2925 15.9948L21.2958 21.9981L22.0029 21.291L15.9996 15.2877Z" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" fill="transparent"></path>
                    <path d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" fill="transparent" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                </div>
                <div class="flex-grow pl-6">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Elige un restaurante</h2>
                <p class="leading-relaxed text-base">Tenemos una gran selección de restaurantes para que elijas comida, postres, bebidas o lo que se te antoje.</p>
                </div>
            </div>
            <div class="p-4 md:w-1/3 flex">
                <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-yellow-200 text-red-500 transition duration-300 hover:bg-red-500 hover:text-white mb-4 flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M18 20C18.5523 20 19 19.5523 19 19C19 18.4477 18.5523 18 18 18C17.4477 18 17 18.4477 17 19C17 19.5523 17.4477 20 18 20Z" fill="transparent" stroke="currentColor" stroke-width="1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M10 20C10.5523 20 11 19.5523 11 19C11 18.4477 10.5523 18 10 18C9.44772 18 9 18.4477 9 19C9 19.5523 9.44772 20 10 20Z" fill="transparent" stroke="currentColor" stroke-width="1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M22 4L20 15H8L6 4" fill="transparent" stroke="currentColor" stroke-width="1"></path>
                    <path d="M22 4L20 15H8L6 4" stroke="currentColor" stroke-width="1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" fill="transparent"></path>
                    <path d="M2 4H6" stroke="currentColor" stroke-width="1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" fill="transparent"></path>
                    <path d="M11 11H17" stroke="currentColor" stroke-width="1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" fill="transparent"></path>
                    <path d="M10 7H18" stroke="currentColor" stroke-width="1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" fill="transparent"></path>
                </svg>
                </div>
                <div class="flex-grow pl-6">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Selecciona tus productos</h2>
                <p class="leading-relaxed text-base">Cada restaurante tiene una oferta de productos que de seguro te va a gustar. Solo añádelos al carrito de compra.</p>
                </div>
            </div>
            <div class="p-4 md:w-1/3 flex">
                <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-yellow-200 text-red-500 transition duration-300 hover:bg-red-500 hover:text-white mb-4 flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M5 12L3 21L21 12L3 3L5 12Z" fill="transparent" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M5 12L13 12" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" fill="transparent"></path>
                </svg>
                </div>
                <div class="flex-grow pl-6">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Presiona enviar</h2>
                <p class="leading-relaxed text-base">Cuando tengas tu carrito listo, solo haz clic en "Pedir" y podrás coordinar el pago y la entrega directamente con el restaurante.</p>
                </div>
            </div>
            </div>
        </div>
    </section>
}