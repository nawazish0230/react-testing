import { render, screen } from '@testing-library/react'
import Greet from './greet'

// describe.only
describe('Greet', () => {
  test('greet renders correctly', () => {
    render(<Greet />)
    const textElement = screen.getByText(/hello/)
    expect(textElement).toBeInTheDocument()
  })

  describe('nested', () => {
    // test.skip
    // test.ignore
    test('greet renders with a name', () => {
      render(<Greet name="Nawazish" />)
      const textElement = screen.getByText(/hello Nawazish/)
      expect(textElement).toBeInTheDocument()
    })
  })
})
