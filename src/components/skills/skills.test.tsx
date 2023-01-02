import { logRoles, render, screen } from '@testing-library/react'
import Skills from './skills'

describe('Skills', () => {
  const skills = ['HTML', 'css', 'js']

  test('render correctly', () => {
    render(<Skills skills={skills} />)
    const listElement = screen.getByRole('list')
    expect(listElement).toBeInTheDocument()
  })

  test('render a list of skills', () => {
    render(<Skills skills={skills} />)
    const listItemElements = screen.getAllByRole('listitem')
    expect(listItemElements).toHaveLength(skills.length)
  })

  test('renders login button', () => {
    render(<Skills skills={skills} />)
    const loginButton = screen.getByRole('button', { name: 'login' })
    expect(loginButton).toBeInTheDocument()
  })

  // when there is conditional rendering of button
  test('start learning button is not rendered', () => {
    render(<Skills skills={skills} />)
    const startLearningButton = screen.queryByRole('button', {
      name: 'start learning',
    })
    expect(startLearningButton).not.toBeInTheDocument()
  })

  // when data will come after a while like api call than findByRole is used / while using async func we can use this
  test('start learning button will eventually displayed', async () => {
    // screen.debug()
    const view = render(<Skills skills={skills} />)
    // logRoles(view.container);
    const startLearningButton = await screen.findByRole(
      'button',
      { name: 'start learning' },
      { timeout: 2000 }
    )
    expect(startLearningButton).toBeInTheDocument()
    // screen.debug()
  })
})
