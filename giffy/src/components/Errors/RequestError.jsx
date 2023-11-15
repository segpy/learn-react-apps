import React from 'react'

const RequestError = () => {
  return (
    <div style={{ display: 'grid', placeContent: 'center', justifyItems: 'center' }}>
      <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-error-404' width='42' height='42' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M3 7v4a1 1 0 0 0 1 1h3' />
        <path d='M7 7v10' />
        <path d='M10 8v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1z' />
        <path d='M17 7v4a1 1 0 0 0 1 1h3' />
        <path d='M21 7v10' />
      </svg>
      <h3><strong style={{ color: 'red' }}>Oops! </strong>Page not found!</h3>
      <h4 style={{ color: 'darkgray' }}>The page that you are looking for does not exist.</h4>
    </div>
  )
}

export default RequestError
