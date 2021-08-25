const setup = () => {
  jest.resetModules()

  jest.mock('express', () => ({
    Router: () => ({
      use: jest.fn(),
      get: jest.fn(),
    }),
  }))

  const router = require('../../../routes/v1/search')
  return router
}

describe('routes/v1 - search.js', () => {
  test('router', () => {
    const router = setup()
    expect(router.get).toBeCalled()
  })
})
