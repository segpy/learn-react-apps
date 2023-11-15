import React from 'react'
import ActiveLink from '../ActiveLink/ActiveLink'

import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <ActiveLink href='/'>▲●</ActiveLink>
      <ActiveLink href='/home'>Home</ActiveLink>
      <ActiveLink href='/about'>About Us</ActiveLink>
      <ActiveLink href='/faq'>FAQ</ActiveLink>
      <ActiveLink href='/users/1'>Users</ActiveLink>
    </nav>
  )
}

export default Navbar
