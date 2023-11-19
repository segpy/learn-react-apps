// Renders the App component with Header and CustomRouter.
import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { expect } from 'vitest'
import App from '../App'

describe('App', () => {
  it('should render App component with Header and CustomRouter', () => {
    render(<App />)
    expect(screen.getByText('Giffy')).toBeDefined()
    expect(screen.getByText('Favorites')).toBeDefined()
    expect(screen.getByText('Trending')).toBeDefined()
    expect(screen.getByText('Random')).toBeDefined()
    expect(screen.getByText('FAQ')).toBeDefined()
  })

  // should render a Header component
  // it('should render a Header component', () => {
  //   render(<App />)
  //   screen.debug()
  //   expect(screen.getByTitle('Giffy')).toBeInTheDocument()
  // })

  // should render a Header component
  // it('should render a Header component', () => {
  //   render(<App />)
  //   expect(screen.getByTestId('app-header')).toBeInTheDocument()
  // })

  // Navigates to an unknown page.
  it('should navigate to an unknown page', async () => {
    render(<App />)
    // fireEvent.click(screen.getByText('Random'))
    await screen.findByRole('form')
    // expect(screen.getByText('Ultima busqueda:')).toBeInTheDocument()``
    screen.debug()
  })
})
