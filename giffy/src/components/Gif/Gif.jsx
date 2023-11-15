import React, { useContext } from 'react'

import './Gif.css'
import { useLocation } from 'wouter'
import GifInfo from '../GifInfo/GifInfo'
import GifContext from '../../context/GifContext'

const Gif = ({ id, title, url }) => {
  const [, setLocation] = useLocation()
  const { setGif } = useContext(GifContext)

  const handleClick = () => {
    setLocation(`/gif/${id}`)
    setGif(([{ id, title, url }]))
  }

  return (
    <div className='gif-container'>
      <GifInfo info={title} />
      <img onClick={handleClick} src={url} alt={title} />
      {/* <small>{id}</small> */}
    </div>
  )
}

export default Gif
