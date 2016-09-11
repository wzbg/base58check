/*
* @Author: zyc
* @Date:   2016-09-11 23:36:23
* @Last Modified by:   zyc
* @Last Modified time: 2016-09-11 23:59:12
*/
'use strict'

const base58check = require('./index')

let data = 'f5f2d624cfb5c3f66d06123d0829d1c9cebf770e'
console.log(base58check(data)) // => 1PRTTaJesdNovgne6Ehcdu1fpEdX7913CK

const prefix = '80'

data = '1E99423A4ED27608A15A2616A2B0E9E52CED330AC530EDCC32C8FFC6A526AEDD'
console.log(base58check(data, prefix)) // => 5J3mBbAH58CpQ3Y5RNJpUKPE62SQ5tfcvU2JpbnkeyhfsYB1Jcn

const encoding = 'hex'

data = '1E99423A4ED27608A15A2616A2B0E9E52CED330AC530EDCC32C8FFC6A526AEDD01'
console.log(base58check(data, prefix, encoding)) // => KxFC1jmwwCoACiCAWZ3eXa96mBM6tb3TYzGmf6YwgdGWZgawvrtJ

data = new Buffer('27b5891b01da2db74cde1689a97a2acbe23d5fb1', encoding)
console.log(base58check(data)) // => 14cxpo3MBCYYWCgF74SWTdcmxipnGUsPw3

data = new Buffer('3aba4162c7251c891207b747840551a71939b0de081f85c4e44cf7c13e41daa6', encoding)
console.log(base58check(data , prefix)) // => 5JG9hT3beGTJuUAmCQEmNaxAuMacCTfXuw1R3FCXig23RQHMr4K

data = new Buffer('3aba4162c7251c891207b747840551a71939b0de081f85c4e44cf7c13e41daa601', encoding)
console.log(base58check(data , prefix, encoding)) // => KyBsPXxTuVD82av65KZkrGrWi5qLMah5SdNq6uftawDbgKa2wv6S