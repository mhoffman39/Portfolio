module.exports = {
  siteMetadata: {
    title: "Portfolio",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // `gatsby-plugin-react-helmet`,
    //`gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Mason's Portfolio`,
    //     short_name: `Portfolio`,
    //     start_url: `/`,
    //     background_color: `#fff`,
    //     theme_color: `#02aab0`,
    //     display: `standalone`,
    //     icon: 'src/images/favicon.png',
    //   },
    // },
  ],
};
