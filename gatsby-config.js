module.exports = {
  siteMetadata: {
    title: `_DeeCode`,
    name: `_DeeCode`,
    siteUrl: `https://novela.narative.co`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `Welcome to Novela, the simplest way to start publishing with Gatsby.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/deesouza`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/_deecode`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/deesouza/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Diego Souza`,
        short_name: `DeeSouza`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
};
