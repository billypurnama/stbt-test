const setup = () => {
  jest.resetModules()

  jest.mock('express', () => ({
    Router: () => ({
      use: jest.fn(),
      get: jest.fn(),
    }),
  }))

  const router = require('../../../routes/v1/index')
  return router
}

describe('routes/v1 - index.js', () => {
  test('router', () => {
    const router = setup()
    expect(router.use).toBeCalled()
  })
})
