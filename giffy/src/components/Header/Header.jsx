import React from 'react'
import { Link } from 'wouter'

import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink'

const Header = () => {
  return (
    <>
      <Link href='/'>
        <h1 className='title'>Giffy</h1>
      </Link>
      <div className='links-container'>
        <ActiveLink href='/favorites'>Favorites</ActiveLink>
        <ActiveLink href='/trending'>Trending</ActiveLink>
        <ActiveLink href='/random'>Random</ActiveLink>
        <ActiveLink href='/faq'>FAQ</ActiveLink>
      </div>
      <hr />
    </>
  )
}

export default Header
