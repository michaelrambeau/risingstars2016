var frontMatter = require('front-matter')
var objectAssign = require('object-assign')

module.exports = function (content) {
  this.cacheable()
  const meta = frontMatter(content)
  const body = meta.body
  const result = objectAssign({}, meta.attributes, {
    body
  })
  this.value = result
  return `module.exports = ${JSON.stringify(result)}`
}
