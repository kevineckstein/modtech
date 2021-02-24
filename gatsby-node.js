const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      services: allStrapiServices {
        nodes {
          url
        }
      }
    }
  `)

  result.data.services.nodes.forEach(service => {
    createPage({
      path: `/service/${service.url}`,
      component: path.resolve(`src/templates/service-template.js`),
      context: {
        url: service.url,
      },
    })
  })
}
