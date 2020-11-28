#!/usr/bin/env node
var argv = require('yargs/yargs')(process.argv.slice(2)).argv;

const command = argv._[0];


let requestDate;

    switch(command) {
        case 'current': 
            const { date, month, year } = argv; 
            requestDate = new Date();
            if (year) requestDate = requestDate.getFullYear()
            if (month) requestDate = requestDate.getMonth()
            if (date) requestDate = requestDate.getDate()
        break;
      
        case 'add':
            if (argv.d) {
                requestDate = new Date();
                requestDate = requestDate.getDate() + argv.d
            } else if (argv.m) {
                requestDate = new Date();
                requestDate = requestDate.getMonth() + argv.m
            } else if (argv.y) {
                requestDate = new Date();
                requestDate = requestDate.getFullYear() + argv.m
            }
        break;

        case 'sub':
            if (argv.d) {
                requestDate = new Date();
                requestDate = requestDate.getDate() - argv.d
            } else if (argv.m) {
                requestDate = new Date();
                requestDate = requestDate.getMonth() - argv.m
            } else if (argv.y) {
                requestDate = new Date();
                requestDate = requestDate.getFullYear() - argv.m
            }
        break; 

      }




console.log(requestDate);
