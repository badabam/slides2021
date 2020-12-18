const fs = require('fs')
const path = require('path')

const startDir = process.argv[2] // first argument passed
const dir = fs.readdirSync(path.resolve(__dirname, startDir), {
  encoding: 'utf8',
})
process.stdout.end(
  dir
    .filter(file => file.endsWith('mdx'))
    .map(file => file.replace(/.*?[./]?(\w+).mdx/i, '$1'))
    .join(',')
)
