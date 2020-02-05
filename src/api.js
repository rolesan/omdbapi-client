const axios = require('axios')

const config = require('./config')

const apiKey = config.omdbKey
const url = config.ombdUrl

/**
 * api запрос для поиска в названиях
 * @param {*} s строка поиска по названию 
 * @param {*} page номер страницы с результатами
 */
const search = (s, page) => new Promise((resolve, reject) => {
  const params = { apiKey, s, page }
  const query = `${url}?${Object.keys(params).map(key => `${key}=${params[key]}`).join('&')}`
  axios.get(query)
  .then(response => {
    if (response.status === 200) resolve(response.data)
    else reject(`api search ERROR: network error`)
  })
  .catch(error => reject(`api search ERROR: ${error}`))
})

/**
 * api запрос описания по id
 * @param {*} i imdbID
 */
const item = i => new Promise((resolve, reject) => {
  const params = { apiKey, i, plot: 'full' }
  const query = `${url}?${Object.keys(params).map(key => `${key}=${params[key]}`).join('&')}`
  axios.get(query)
  .then(response => {
    if (response.status === 200) resolve(response.data)
    else reject(`api item ERROR: network error`)
  })
  .catch(error => reject(`api item ERROR: ${error}`))
})

module.exports = {
  search,
  item,
}
