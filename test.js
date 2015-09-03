'use strict'

var test = require('tape')
var nextTick = require('next-tick')
var debounce = require('./')

test(function (t) {
  t.plan(6)

  var context = {}

  var debounced = debounce(fn)
  debounced.call(context, 1, 2)
  debounced.call(context, 1, 2)

  nextTick(function () {
    debounced.call(context, 1, 2)
  })

  function fn (a, b) {
    t.equal(a, 1)
    t.equal(b, 2)
    t.equal(this, context)
  }
})
