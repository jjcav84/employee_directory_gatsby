/* exports.createPages = async function({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      rickAndMortyAPI {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  data.rickAndMortyAPI.edges.forEach(edge => {
    const node = edge.node
    actions.createPage({
      path: node,
      component: require.resolve(`./src/templates/page.js`),
      context: { node: node },
    })
  })
}
 */
