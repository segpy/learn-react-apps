import React from 'react'
import GifWrapper from '../../components/GifWrapper/GifWrapper'

const GifsHome = (props) => {
  const { keyword } = props.params

  return (
    <GifWrapper keyword={keyword} />
  )
}

export default GifsHome
