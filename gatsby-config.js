module.exports = {
  siteMetadata: {
    title: `Nestted | Social media for families`,
    description: `Nestted helps families share moments, stay connected, and keep accountability built in.`,
    author: `Nestted`,
    siteUrl: `https://nestted.com`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://nestted.com`,
        sitemap: `https://nestted.com/sitemap.xml`,
        policy: [
          {
            userAgent: `*`,
            allow: `/`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nestted`,
        short_name: `Nestted`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}

