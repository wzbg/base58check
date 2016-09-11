base58check
===========

[![build status](https://secure.travis-ci.org/cryptocoinjs/bs58.png)](http://travis-ci.org/cryptocoinjs/bs58)

JavaScript component to compute base 58 check encoding. This encoding is typically used for crypto currencies such as Bitcoin.

Install
-------

    npm i --save base58check

API
---

### string base58check(data, prefix = '00', encoding = 'hex')

`data` must be a [Buffer](http://nodejs.org/api/buffer.html) or a `string`. It returns a `string`.

**example**:

```js
const base58check = require('base58check')

let data = 'f5f2d624cfb5c3f66d06123d0829d1c9cebf770e'
console.log(base58check(data)) // => 1PRTTaJesdNovgne6Ehcdu1fpEdX7913CK
```

Hack / Test
-----------

Uses JavaScript standard style. Read more:

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

Credits
-------
- [unrealce](https://github.com/wzbg) for original JavaScript implementation

Related
-------

- [`bs58`](https://www.npmjs.com/package/bs58) - JavaScript component to compute base 58 encoding. This encoding is typically used for crypto currencies such as Bitcoin.

License
-------

The MIT License (MIT)

Copyright (c) 2016