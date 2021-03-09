module.exports = {
  siteMetadata: {
    flags: { PRESERVE_WEBPACK_CACHE: true },
    title: "Modern Tech Ltd",
    name: "Modern Tech Ltd",
    description:
      "Trinidad's modern solutions to technical problems. Providing innovative solutions nationwide for Information Technology and many other areas of expertise in both commercial and enterprise",
    author: "Kevin Eckstein",
    background_color: "#fff",
    siteUrl: "https://modtech.co.tt",
    keywords:
      "Trinidad, Modern, Tech, Technology, Solutions, Kevin, Eckstein, Information, I.T, Management, Services",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Eckstein Modern Tech Ltd",
        short_name: "ModTech",
        start_url: "/",
        background_color: "#F3F4F6",
        theme_color: "#F3F4F6",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: `src/images/modern-tech-512.png`,
        icons: [
          {
            src: `static/icons/modern-tech-72.png`,
            sizes: `48x48`,
            type: `image/png`,
          },
          {
            src: `static/icons/modern-tech-72.png`,
            sizes: `72x72`,
            type: `image/png`,
          },
          {
            src: `static/icons/modern-tech-96.png`,
            sizes: `96x96`,
            type: `image/png`,
          },
          {
            src: `static/icons/modern-tech-144.png`,
            sizes: `144x144`,
            type: `image/png`,
          },
          {
            src: `static/icons/modern-tech-192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `static/icons/modern-tech-310.png`,
            sizes: `310x310`,
            type: `image/png`,
          },
          {
            src: `static/icons/modern-tech-512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ], // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: `gatsby-plugin-gatsby-cloud`,
      options: {
        allPageHeaders: [
          "Strict-Transport-Security: max-age=31536000; includeSubDomains; preload",
        ], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-smoothscroll`,

    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss")],
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.modtech.co.tt",
        sitemap: "https://www.modtech.co.tt/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },

    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `${process.env.API_URL || "http://localhost:1337"}`,
        queryLimit: 1000, // Default to 100
        contentTypes: [
          `banners`,
          `partners`,
          `testimonials`,
          `donations`,
          `services`,
        ],
        singleTypes: [
          `digital-service`,
          `infrastructure-services`,
          `management-services`,
          `about`,
          `contact`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        showSpinner: true,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        formats: ["woff2", "woff"],
        useMinify: true,
        fonts: {
          google: [
            {
              family: "Libre Baskerville",
              variants: ["400", "700"],
              fontDisplay: "swap",
            },
            {
              family: "Lato",
              variants: ["400", "700"],
              fontDisplay: "swap",
            },
          ],
        },
      },
    },
  ],
}
