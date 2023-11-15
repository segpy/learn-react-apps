import React, { useCallback } from 'react'

import './Home.css'
import { useLocation } from 'wouter'
import useLocalStorage from '../../hooks/useGifts/useLocalStorage'
import GifWrapper from '../../components/GifWrapper/GifWrapper'

const Home = () => {
  const [, setLocation] = useLocation()
  const { localSearch } = useLocalStorage()
  // const { show, elementRef } = useIntersection()

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    const { value } = e.target[0]
    // navigate to other route
    if (value) {
      window.localStorage.setItem('lastKeyword', value)
      setLocation(`/search/${value}`)
    }
  }, [])

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Search a gif here...' />
        <button>
          <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-search' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0' />
            <path d='M21 21l-6 -6' />
          </svg>
        </button>
      </form>
      <h3>Ultima busqueda: <small>{localSearch}</small></h3>
      <GifWrapper keyword={localSearch} />
    </>
  )
}

export default Home
