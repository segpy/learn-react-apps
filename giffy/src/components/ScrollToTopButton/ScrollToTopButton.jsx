import React, { useState, useEffect } from 'react'

import './ScrollToTopButton.css'
import { Button } from '@mui/material'

function ScrollToTopButton () {
  const [isVisible, setIsVisible] = useState(false)

  // Agrega un observador de desplazamiento para mostrar u ocultar el botón
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    // console.log('Montado')

    window.addEventListener('scroll', handleScroll)

    return () => {
      // console.log('Desmontado')
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Función para volver al principio de la página
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Animación suave al desplazar
    })
  }

  return (
    <Button
      variant='contained' color='primary' onClick={scrollToTop} className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
    >
      <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-arrow-up' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <line x1='12' y1='5' x2='12' y2='19' />
        <line x1='18' y1='11' x2='12' y2='5' />
        <line x1='6' y1='11' x2='12' y2='5' />
      </svg>
    </Button>
  )
}

export default ScrollToTopButton
