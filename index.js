'use strict'

var assert = require('assert-function')
var toArray = require('to-array')
var nextTick = require('next-tick')

module.exports = debounce

function debounce (fn) {
  assert(fn)

  var args = null
  var context = null

  return debounced

  function debounced () {
    var previous = args
    args = toArray(arguments)
    context = this
    if (previous !== null) return
    nextTick(next)
  }

  function next () {
    fn.apply(context, args)
    args = null
    context = null
  }
}
