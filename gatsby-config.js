module.exports = {
  siteMetadata: {
    title: `Aretanet Blog`,
    description: `Aretanet Blog Berbagi Tip dan Trik Bisnis, IT dan Wirausaha.`,
    author: `@syukrie77`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    /*
     * Gatsby's data processing layer begins with “source”
     * plugins. Here the site sources its data from WordPress.
     */
    // highlight-start
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        /*
         * The full URL of the WordPress site's GraphQL API.
         * Example : 'https://www.example-site.com/graphql'
         */
        //url: `http://localhost/wordpress-cms/graphql`,
        url: `https://wordpress.aretanet.com/graphql`,
      },
    },
    // highlight-end
    /**
     * The following plugins aren't required for gatsby-source-wordpress,
     * but we need them so the default starter we installed above will keep working.
     **/
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
        name: `AretanetBlog`,
        short_name: `aretanet`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logoaretanet.jpg`, // This path is relative to the root of the site.
      },
    },
  ],
}