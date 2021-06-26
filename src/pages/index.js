import React from "react";
import { graphql } from "gatsby";
import Container from '../components/main/container'
import Usage from '../components/main/usage'
import Preface from '../components/main/bodyPreface'
import Body from '../components/main/body'

export default function Index ({data: {site: {favicon}, page: {seo}, shops: {nodes: shops}}}) {
  return <Container seo={seo} favicon={favicon}>
    <Usage />
    <Preface />
    <Body shops={ shops }/>
  </Container>
}

export const query = graphql`
query MyQuery {
  shops: allDatoCmsShop {
    nodes {
      description
      excerpt
      name
      slug
      previewImage {
        small: fluid(imgixParams: { fm: "jpg" }, sizes: "(max-width: 760px) 100vw, (max-width: 1500px) 50vw, 700px") {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
  page: datoCmsPage {
    name
    seo: seoMetaTags {
      ...GatsbyDatoCmsSeoMetaTags
    }
  }
  site: datoCmsSite {
    favicon: faviconMetaTags {
      ...GatsbyDatoCmsFaviconMetaTags
    }
  }
}
`;
