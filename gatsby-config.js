module.exports = {
  siteMetadata: {
    title: `Design Week 2019`,
    description: `Event Details for Design Week 2019`,
    author: `PCG Design Squad`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "kellydesigntest.wordpress.com",
        protocol: "https",
        hostingWPCOM: true,
        useACF: false,
        auth: {
          wpcom_app_clientSecret:
            "tFeSCu64s6iJbUzRqaKFRp7bO0FhxKM3UxTIhLi8AoiYQDSgbWQnggPQnqC6UN5v",
          wpcom_app_clientId: "64972",
          wpcom_user: "kn.harrop@gmail.com",
          wpcom_pass: "nE7!q9ShQ$%%C6P^eEDdS!34X&SHbs!6j%2#k",
        },

        verboseOutput: false,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
