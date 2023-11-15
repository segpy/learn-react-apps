import React from 'react'

const NotFound = () => {
  return (
    <div style={{ display: 'grid', placeContent: 'center', justifyItems: 'center' }}>
      <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-search-off' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M5.039 5.062a7 7 0 0 0 9.91 9.89m1.584 -2.434a7 7 0 0 0 -9.038 -9.057' />
        <path d='M3 3l18 18' />
      </svg>
      <p>Sorry, there aren't gifs for your search</p>
    </div>
  )
}

export default NotFound
