import React from 'react'
import Gif from '../Gif/Gif'

import './GifList.css'

const GifList = ({ gifs }) => {
  const myClass = gifs.length === 1 ? 'gif-details-container ' : 'gif-list-container'

  return (
    <div className={myClass}>
      {
    gifs.map(({ id, title, url }) => (
      <Gif key={id} id={id} title={title} url={url} />
    ))
    }
    </div>
  )
}

export default GifList
