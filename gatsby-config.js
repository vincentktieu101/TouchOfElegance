module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `Touch Of Elegance`,
    description: `Touch of Elegance, Nails and Spa is an amazing place for all your
    nail and spa related needs. For your nails, we have an array of options such as 
    manicures, pedicures, and nail fix-ups for your acrylic, gel, and dipping nails.
    For more spa-related options, we can provide facials, waxing, and massages. Touch
    of Elegance is conviently located in Westwood, Los Angeles. Our full address is 
    1846 Westwood Boulevard Los Angeles, California 90025 United States. Come to restore,
    rejuvenate, and cleanse your body.`,
    author: `https://github.com/vincentktieu101`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-material-ui`,
  ],
};
