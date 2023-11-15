import React, { useEffect } from 'react'

const TempComponent = () => {
  useEffect(() => {
    // console.log('Montado')
    return () => {
      // console.log('Desmontado')
    }
  }, [])
  return (
    <div>TempComponent</div>
  )
}

export default TempComponent
