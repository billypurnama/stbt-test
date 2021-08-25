const setup = () => {
  jest.resetModules()

  const api = require('../../constants/api')
  return api
}

describe('constants - api.js', () => {
  test('OMDB_URL - api', () => {
    const api = setup()
    expect(api.OMDB_URL).toBe('http://www.omdbapi.com/')
  })
})
