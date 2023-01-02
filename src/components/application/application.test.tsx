import { render, screen } from '@testing-library/react'
import Application from './application'

// 8 different type of test input element
// priority order for queries
// - test should resemble in the way that user interact with code (components, page etc)
// - getByRole
// - getByLabelText
// - getByPlaceholderText
// - getByText
// - getByDisplayValue
// - getByAltText
// - getByAltTitle
// - getByAltTestId

describe('Application', () => {
  test('render correctly', () => {
    render(<Application />)

    const headingElement = screen.getByRole('heading', { level: 1 })
    expect(headingElement).toBeInTheDocument()

    const sectionHeadingElement = screen.getByRole('heading', { level: 2 })
    expect(sectionHeadingElement).toBeInTheDocument()

    const paragraphElement = screen.getByText('all fields are mandatory', {
      exact: false,
    })
    expect(paragraphElement).toBeInTheDocument()

    const closeElement = screen.getByTitle('close')
    expect(closeElement).toBeInTheDocument()

    const imgElement = screen.getByAltText('placeholder-img')
    expect(imgElement).toBeInTheDocument()

    const customElement = screen.getByTestId('custom-element')
    expect(customElement).toBeInTheDocument()

    const nameElement = screen.getByRole('textbox', { name: 'Name' })
    expect(nameElement).toBeInTheDocument()
    const nameElement2 = screen.getByLabelText('Name', { selector: 'input' })
    expect(nameElement2).toBeInTheDocument()
    const nameElement3 = screen.getByPlaceholderText('fullName')
    expect(nameElement3).toBeInTheDocument()
    const nameElement4 = screen.getByDisplayValue('nawazish')
    expect(nameElement4).toBeInTheDocument()

    const bioElement = screen.getByRole('textbox', { name: 'Bio' })
    expect(bioElement).toBeInTheDocument()

    const jobLocationElement = screen.getByRole('combobox')
    expect(jobLocationElement).toBeInTheDocument()

    const termsElement = screen.getByRole('checkbox')
    expect(termsElement).toBeInTheDocument()
    const termsElement2 = screen.getByLabelText(
      'I agree to the terms & condition'
    )
    expect(termsElement2).toBeInTheDocument()

    const submitButtonElement = screen.getByRole('button')
    expect(submitButtonElement).toBeInTheDocument()
    expect(submitButtonElement).toBeDisabled()
  })
})
