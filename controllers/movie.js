require('dotenv').config()

const axios = require('axios')
const api = require('../constants/api')

class MovieController {
  static search (req, res, next) {
    let {
      title,
      page,
    } = req.query

    if (!title.length) 
      return res.status(400).json({ success: false })
    if (!page) page = 1

    axios
      .get(`${api.OMDB_URL}?apikey=${process.env.OMDB_API_KEY}&s=${title}&page=${page}`)
      .then(response => {
        return res.status(200).json({
          success: true,
          data: response.data.Search || []
        })
      })
      .catch(error => {
        return res
          .status(500)
          .json({
            success: false,
          })
      })
  }

  static detail (req, res, next) {
    const {
      id,
    } = req.params

    if (!id.length) return res.status(400).json({ success: false })

    axios
      .get(`${api.OMDB_URL}?i=${id}&apikey=${process.env.OMDB_API_KEY}`)
      .then(response => {
        return res.status(200).json({
          success: true,
          data: response.data
        })
      })
      .catch(error => { 
        return res
          .status(500)
          .json({
            success: false,
          })
      })
  }
}

module.exports = MovieController
