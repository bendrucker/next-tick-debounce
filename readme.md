# next-tick-debounce [![Build Status](https://travis-ci.org/bendrucker/next-tick-debounce.svg?branch=master)](https://travis-ci.org/bendrucker/next-tick-debounce)

> Debounce multiple synchronous function calls into a single async call


## Install

```
$ npm install --save next-tick-debounce
```


## Usage

```js
var debounce = require('next-tick-debounce')
var i = 0
var debounced = debounce(function () {
  console.log(i++)  
})

debounced()
debounced()
debounced()

//=> 0 (only called once)

setTimeout(debounced, 10)

//=> 1
```

The debounced function runs with the last set of arguments/context.

## API

#### `debounce(fn)` -> `function`

##### fn

*Required*  
Type: `fn`

A function that should run at most once per tick.

## License

MIT © [Ben Drucker](http://bendrucker.me)
