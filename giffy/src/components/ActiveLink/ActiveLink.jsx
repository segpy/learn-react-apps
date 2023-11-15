import React from 'react'
import { Link, useRoute } from 'wouter'

import './ActiveLink.css'

const ActiveLink = ({ href, children }) => {
  const [isActive] = useRoute(href)
  return (
    <Link href={href}>
      <p className={isActive ? 'active' : ''}>{children}</p>
    </Link>
  )
}

export default ActiveLink
