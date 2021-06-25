import React from 'react'
import { graphql } from "gatsby"
import Container from '../../components/main/container'
import Body from '../../components/shop/body'
import BodyPreface from '../../components/shop/bodyPreface'

export default function ShopPage({ data: { shop } }) {
    return <Container shop={shop}>
        <BodyPreface
            name={shop.name}
            description={shop.description}
            image={shop.previewImage.small}
        />
        <Body products={ shop.products } slug={shop.slug}/>
    </Container>
}

export const query = graphql`
    query ShopById($id: String) {
        shop: datoCmsShop(id: { eq: $id }) {
            id
            name
            slug
            description
            previewImage {
                small: fluid(
                    imgixParams: { fm: "jpg" }
                    sizes: "(max-width: 1500px) 100vw, 1500px"
                ) {
                    ...GatsbyDatoCmsFluid
                }
            }
            products {
                name
                excerpt
                slug
                price
                previewImage {
                    small: fluid(imgixParams: { fm: "jpg" }, sizes: "(max-width: 760px) 100vw, (max-width: 1500px) 50vw, 700px") {
                      ...GatsbyDatoCmsFluid
                    }
                }
            }
        }
    }
`