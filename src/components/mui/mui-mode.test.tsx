import { render, screen } from '../../test-utils'
import { AppProviders } from '../../providers/app-provider'
import { MuiMode } from './mui-mode'

describe('MuiMode', () => {
  test('renders text correctly', () => {
    render(<MuiMode />)
    const headingElement = screen.getByRole('heading')
    expect(headingElement).toHaveTextContent('dark mode')
  })
})
