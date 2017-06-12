var chalk = require('chalk')
var Metalsmith = require('metalsmith')
var async = require('async')
var path = require('path')
var multimatch = require('multimatch')

module.exports = function generate(name, src, dest, done) {
	console.log(name, src, dest)
}