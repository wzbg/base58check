/*
* @Author: zyc
* @Date:   2016-09-11 23:36:05
* @Last Modified by:   zyc
* @Last Modified time: 2016-09-11 23:38:29
*/
'use strict'

const crypto = require('crypto')
const base58 = require('bs58')

module.exports = (data, prefix = '00', encoding = 'hex') => {
  if (typeof data === 'string') {
    data = new Buffer(data, encoding)
  }
  if (!(data instanceof Buffer)) {
    throw new TypeError('"data" argument must be an Array of Buffers')
  }
  if (!(prefix instanceof Buffer)) {
    prefix = new Buffer(prefix, encoding)
  }
  let hash = Buffer.concat([prefix, data])
  hash = crypto.createHash('sha256').update(hash).digest()
  hash = crypto.createHash('sha256').update(hash).digest()
  hash = Buffer.concat([prefix, data,  hash.slice(0, 4)])
  return base58.encode(hash)
}