const data = require('./data.txt')
const css = require('raw-loader!./index.css')

document.write(data)
document.write('<hr/>')
document.write(css)
