// import { Pages } from '@mui/icons-material'
// import { Button } from '@mui/material'
import useIntersection from '../../hooks/useIntersection/useIntersection'
import React, { useEffect } from 'react'

const LoadMoreBtn = ({ page, setPage, ...props }) => {
  const OFFSET_INCREMENT = 1
  const { show, elementRef } = useIntersection()

  useEffect(() => {
    if (show) {
      setPage((prevPage) => prevPage + OFFSET_INCREMENT)
    }
  }, [show])

  return (
    <>
      <div ref={elementRef} />
      {/* <Button variant='contained' color='primary' onClick={handleLoad} className='load-more-btn'>
        Load more
      </Button> */}
    </>
  )
}

export default LoadMoreBtn
