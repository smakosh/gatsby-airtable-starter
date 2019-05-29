const path = require("path")

exports.onCreatePage = async ({ page, actions: { createPage } }) => {
  if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/*"
    createPage(page)
  }
}

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  try {
    const sceneTemplate = path.resolve("./src/templates/scene.js")
    const { data, errors } = await graphql(`
      {
        airtable: allAirtable(filter: { table: { eq: "Scenes" } }) {
          edges {
            node {
              id
            }
          }
        }
      }
    `)

    if (errors) {
      throw new Error(errors)
    }

    data.airtable.edges.forEach(({ node: { id } }) => {
      createPage({
        path: id,
        component: sceneTemplate,
        context: {
          id,
        },
      })
    })
  } catch (error) {
    console.log(errors)
  }
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
}
