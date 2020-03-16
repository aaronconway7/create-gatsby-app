module.exports = {
    siteMetadata: {
        title: `Gatsby Site`,
        description: `My Starter Template for a Gatsby based site.`,
        author: `@aaronconway7`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-site`,
                short_name: `gatsby`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {
                // Add any options here
                displayName: false,
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // The property ID; the tracking code won't be generated without it
                trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
            },
        },
        {
            resolve: `gatsby-plugin-canonical-urls`,
            options: {
                siteUrl: `https://www.example.com`,
            },
        },
        `gatsby-plugin-postcss`,
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                postCssPlugins: [
                    require('tailwindcss'),
                    require('./tailwind.config.js'), // Optional: Load custom Tailwind CSS configuration
                ],
            },
        },
    ],
}
