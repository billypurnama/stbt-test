const setup = () => {
  jest.resetModules()

  const axios = require('axios')
  jest.mock('axios')

  const movieController = require('../../controllers/movie')
  return { movieController, axios }
}

let mockRes = {
  status: code => ({
    json: status => ({ success: false })
  }),
}

describe('controllers - movie.js', () => {
  test('method - search - case normal', () => {
    const { movieController, axios } = setup()

    axios.get.mockResolvedValue({
      data: {
        Search: [],
      }
    })

    movieController.search(
      { query: {
        title: 'Batman',
        Page: 1,
      } },
      mockRes,
    )
  })

  test('method - search - case rejected value', () => {
    const { movieController, axios } = setup()

    axios.get.mockRejectedValue({ success: false })

    movieController.search(
      { query: {
        title: 'Batman',
        Page: 1,
      } },
      mockRes,
    )
  })

  test('method - search - case no Search data', () => {
    const { movieController, axios } = setup()

    axios.get.mockResolvedValue({
      data: {
        title: 'title'
      }
    })

    movieController.search(
      { query: {
        title: 'Batman',
        Page: 1,
      } },
      mockRes,
    )
  })

  test('method - search - case empty title', () => {
    const { movieController, axios } = setup()

    axios.get.mockResolvedValue({
      data: {
        Search: []
      }
    })

    movieController.search(
      { query: {
        title: '',
        Page: 1,
      } },
      mockRes,
    )
  })

  test('method - detail', () => {
    const { movieController, axios } = setup()

    axios.get.mockResolvedValue({
      data: {
        title: 'title'
      }
    })

    movieController.detail(
      { params: {
        id: 'tt4154796',
      } },
      mockRes,
    )
  })

  test('method - detail - rejected', () => {
    const { movieController, axios } = setup()

    axios.get.mockRejectedValue({ success: false })

    movieController.detail(
      { params: {
        id: 'tt4154796',
      } },
      mockRes,
    )
  })

  test('method - detail - case empty id', () => {
    const { movieController, axios } = setup()
    
    axios.get.mockResolvedValue({
      data: {
        title: 'title'
      }
    })

    movieController.detail(
      { params: {
        id: '',
      } },
      mockRes,
    )
  })
})
