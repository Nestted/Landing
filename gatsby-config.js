module.exports = {
  siteMetadata: {
    title: `Nestted`,
    description: `A private space for families and households to stay connected.`,
    author: `Nestted`,
    siteUrl: `https://nestted.com`,
  },
  plugins: [
    `gatsby-plugin-sass`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nestted`,
        short_name: `Nestted`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `src/images/icon.png`, // we’ll add this next
      },
    },

    `gatsby-plugin-offline`,
  ],
}
