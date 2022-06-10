// import {fs} from 'fs'
const fs = require('fs')

let context = "Hello World... How are you doing";

const w = fs.writeFileSync('new2.txt',context)

const text = fs.readFileSync('new.txt','utf-8')
console.log(text)

