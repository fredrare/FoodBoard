require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Gatsby Shops board`,
  },
  plugins: [
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
        environment: process.env.DATO_ENVIRONMENT,
        apiUrl: `https://site-api.datocms.com`
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
  ],
};
