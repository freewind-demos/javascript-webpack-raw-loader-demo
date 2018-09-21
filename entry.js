const data = require('./data.txt')
const css = require('raw-loader!./data.css')
const json = require('./data.json')

document.write(data)
document.write('<hr/>')
document.write(css)
document.write('<hr/>')
document.write(json)
