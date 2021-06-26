import { graphql } from "gatsby"
import React from 'react' 
import Container from '../../components/main/container'
import Body from "../../components/product/body"
import Preface from "../../components/product/bodyPreface"

export default function ProductBody ({data: {site: {favicon}, product}}) {
    return <Container shop={product.shop} favicon={favicon} seo={product.seo}>
        <Preface
            name={product.name}
            description={product.description}
            price={product.price}
            shop={product.shop}
        />
        <Body
            name={product.name}
            preview={product.previewImage}
            gallery={product.gallery}
        />
    </Container>
}

export const query = graphql`
    query ProductById($id: String) {
        product: datoCmsProduct(id: { eq: $id }) {
            name
            slug
            description
            price
            shop {
                id
                name
                slug
            }
            seo: seoMetaTags {
                ...GatsbyDatoCmsSeoMetaTags
            }
            previewImage {
                small: fluid(
                    imgixParams: { fm: "jpg" }
                    sizes: "(max-width: 1500px) 100vw, 1500px"
                ) {
                    ...GatsbyDatoCmsFluid
                }
            }
            gallery {
                small: fluid(
                    imgixParams: { fm: "jpg" }
                    sizes: "(max-width: 1500px) 100vw, 1500px"
                ) {
                    ...GatsbyDatoCmsFluid
                }
            }
        }
        site: datoCmsSite {
            favicon: faviconMetaTags {
              ...GatsbyDatoCmsFaviconMetaTags
            }
        }
    }
`