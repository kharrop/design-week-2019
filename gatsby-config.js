require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Design Week 2019`,
    description: `Event Details for Design Week 2019`,
    author: `PCG Design Squad`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
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
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "intuitdesignweek.wordpress.com",
        protocol: "https",
        hostingWPCOM: true,
        useACF: false,
        auth: {
          wpcom_app_clientSecret:
            "GOQd3VyQj3BE0d7iD8xIFIda7hNT8MZswmUsz1xQmJFRUWlWiCBvkFnfVoHPMGMg",
          wpcom_app_clientId: "65141",
          wpcom_user: process.env.WP_USERNAME,
          wpcom_pass: process.env.WP_PASSWORD,
        },

        verboseOutput: false,
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        type: `hashtag`,
        hashtag: `pcgdesignweek`,
      },
    },
    `gatsby-plugin-sass`,

    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
