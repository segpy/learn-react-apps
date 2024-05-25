import { cleanup, customRender, screen } from './utils/test-utils'
import App from './App'

describe('App', () => {
  beforeEach(() => cleanup())
  test('should render', () => {
    customRender(<App />)
  })

  test('should render the title', () => {
    customRender(<App />)
    const title = screen.getByText(/Giffy/i)
    expect(title).toBeInTheDocument()
  })
})
