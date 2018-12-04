const { getCheerioRequestOpt, to } = require('../../utils')
const { host } = require('../config')
const rp = require('request-promise')

module.exports = async function getNextPage(page) {

  console.log('On page:' + page)
  var [err, $] = await to(rp(getCheerioRequestOpt(`${host}/e/action/ListInfo/?classid=11&page=${page}`)))
  return $('li.post.box')

}