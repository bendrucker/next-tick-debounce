'use strict'

var test = require('tape')
var nextTick = require('next-tick')
var debounce = require('./')

test(function (t) {
  t.plan(6)

  var context = {}

  var debounced = debounce(fn)
  debounced.call(context, 1, 2)
  debounced.call(context, 2, 4)

  var ticked = false
  nextTick(function () {
    ticked = true
    debounced.call(context, 4, 8)
  })

  function fn (a, b) {
    if (!ticked) {
      t.equal(a, 2)
      t.equal(b, 4)
    } else {
      t.equal(a, 4)
      t.equal(b, 8)
    }
    t.equal(this, context)
  }
})
