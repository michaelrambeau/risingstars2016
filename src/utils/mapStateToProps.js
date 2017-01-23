function getProjectsByTag (githubProjects, projects, tag) {
  const sortFilter = 'yearly'
  const tagProjects = githubProjects[sortFilter]
    .map(id => projects[id])
    .filter(project => project.tags.indexOf(tag) > -1)
    .slice(0, 20)
  return tagProjects
}

function mapStateToProps (state, props) {
  const {
    entities: { projects },
    githubProjects
  } = state

  const allProjects = githubProjects['yearly']

  const all = allProjects
    .map(id => projects[id])
    .slice(0, 50)

  const tags = [
    'framework',
    'vdom',
    'react-template',
    'compiler',
    'test-framework',
    'chart',
    'css-lib',
    'nodejs-framework',
    'build',
    'css-tool',
    'desktop',
    'ide',
    'ssg',
    'mobile'
  ]

  const filteredProjects = tags
    .reduce(
      (result, tag) => Object.assign({}, result, {
        [tag]: getProjectsByTag(githubProjects, projects, tag)
      }),
      {}
    )
  const trendingProjects = Object.assign({}, { all }, filteredProjects)

  return {
    projects: trendingProjects
  }
}

export default mapStateToProps
