module.exports = {
  siteMetadata: {
    title: `Home | 👨‍💻 Diego Souza - Frontend e Backend Developer`,
    name: `Diego Souza`,
    siteUrl: `https://novela.narative.co`,
    description: `Dicas úteis de programação em Node, React e React Native. Quase tudo sobre o ecossistema JavaScript.`,
    hero: {
      heading: `Dicas de Frontend e Backend`,
      maxWidth: 852,
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
