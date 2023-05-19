const logger = require('./logger'); //returns exported object (log) from the file. 'Const' should be used so that the reference isn't changed
//would use ../ if the logger was in a parent folder
//would use ./subfolder/ if the logger is in a subfolder
const _ = require('underscore'); //underscore.org will show you variables for this library

logger.log("hello world");
console.log(_.first([5, 4, 3, 2, 1])); //prints the first item in the array using the underscore library