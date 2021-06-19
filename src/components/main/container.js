import React from 'react'
import Header from './header'
import Footer from './footer'

export default function Container({ children }) {
    return <div>
        <Header />
        <div className="h-screen flex-col pt-10">
            <div className="flex-grow container mx-auto px-5 mt-20">
                {children}
            </div>
            <Footer />
        </div>
    </div>
}
