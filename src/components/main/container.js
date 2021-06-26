import React from 'react'
import Header from './header'
import Footer from './footer'
import { HelmetDatoCms } from 'gatsby-source-datocms'

export default function Container({ favicon, seo, shop, children }) {
    const lang = {
        lang: 'es'
    }
    return <div>
        <Header shop={shop}/>
        <HelmetDatoCms seo={seo} favicon={favicon} htmlAttributes={lang} />
        <div className="h-screen flex-col pt-10">
            <div className="flex-grow container mx-auto px-5 mt-20">
                {children}
            </div>
            <Footer />
        </div>
    </div>
}
