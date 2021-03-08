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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/*": ["cache-control: public, max-age=0, must-revalidate"],
        }, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        devMode: true,
      },
    },
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
      resolve: `gatsby-plugin-webfonts`,
      options: {
        useMinify: true,
        fonts: {
          google: [
            {
              family: "Libre Baskerville",
              variants: ["400", "700"],
              fontDisplay: "swap",
              strategy: "selfHosted",
            },
            {
              family: "Lato",
              variants: ["400", "700"],
              fontDisplay: "swap",
              strategy: "selfHosted",
            },
          ],
        },
        formatAgents: {
          woff2: `Mozilla/5.0 (Windows NT 10.0; Win64; x64; ServiceUI 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false, // Print removed selectors and processed file names
        develop: false, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
        whitelist: [
          "font-sub",
          "font-heading",
          "text",
          "services",
          "slick-slide",
          "slick-track",
          "wid",
          "[data-sal|='slide'].sal-animate",
          "[data-sal='slide-right']",
          "[data-sal='slide-down']",
          "[data-sal='slide-up']",
          "[data-sal|='slide']",
          "[data-sal|='fade'].sal-animate",
          "[data-sal|='fade']",
          "[data-sal]",
          "[data-sal][data-sal-easing='ease']",
          "[data-sal][data-sal-duration='600']",
          "[data-sal][data-sal-duration='300']",
          "[data-sal][data-sal-delay='300']",
          "[data-sal][data-sal-delay='600']",
          "sal-animate",
          "sal-disable",
          "body.sal-disabled [data-sal|=fade]",
          "[data-sal|=fade].sal-animate",
          "[data-sal|=slide].sal-animate",
          "body.sal-disabled [data-sal|=slide]",
        ], // Don't remove this selector
        ignore: [
          "slick-carousel/slick/slick-theme.css",
          "slick-carousel/slick/slick.css",
        ], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    },
  ],
}
