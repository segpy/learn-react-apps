import React from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import './GifInfo.css'

const GifInfo = ({ info }) => {
  return (
    <div className='info-container'>
      <InfoOutlinedIcon className='gif-info' />
      <strong>{info}</strong>
    </div>
  )
}

export default GifInfo
