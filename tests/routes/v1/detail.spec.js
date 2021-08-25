const setup = () => {
  jest.resetModules()

  jest.mock('express', () => ({
    Router: () => ({
      use: jest.fn(),
      get: jest.fn(),
    }),
  }))

  const router = require('../../../routes/v1/detail')
  return router
}

describe('routes/v1 - detail.js', () => {
  test('router', () => {
    const router = setup()
    expect(router.get).toBeCalled()
  })
})
