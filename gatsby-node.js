const path = require("path")
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.onCreateNode = async ({
  node,
  actions,
  store,
  cache,
  createNodeId,
}) => {
  const { createNode } = actions

  // replace ".sliderHome" for the name of multiple media in Strapi CMS
  let sliderImages = node.banner

  // replace “StrapiHome” for your node type
  if (node.internal.type !== null && node.internal.type === "StrapiServices") {
    if (sliderImages.length > 0) {
      // sliderImages.forEach(el => console.log(el))
      const images = await Promise.all(
        sliderImages.map(el =>
          createRemoteFileNode({
            url: el.url,
            parentNodeId: node.id,
            store,
            cache,
            createNode,
            createNodeId,
          })
        )
      )

      sliderImages.forEach((image, i) => {
        image.localFile___NODE = images[i].id
      })
    }
  }
}

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
