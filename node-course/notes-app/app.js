// import Node, file system package
const fs = require('fs')

// using writeFile and writeFileSync methods. Takes in 2 args, file and data to write to file
fs.writeFileSync('notes.txt', 'This file was created by Node.js')