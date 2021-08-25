const setup = () => {
  jest.resetModules()

  jest.mock('express', () => ({
    Router: () => ({
      get: jest.fn(),
    }),
  }))

  const router = require('../../routes/index')
  return router
}

describe('routes - index.js', () => {
  test('router', () => {
    const router = setup()
    expect(router.get).toBeCalled()
  })
})
