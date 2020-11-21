#!/usr/bin/env node
var argv = require('yargs/yargs')(process.argv.slice(2)).argv;

const data = new Date();

if (argv._.find(el => el === 'current')) {
    console.log(data);
}

if (argv.year) {
    console.log(data.getFullYear);
}

