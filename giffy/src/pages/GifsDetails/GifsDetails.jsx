import React from 'react'
import GifWrapper from '../../components/GifWrapper/GifWrapper'

const GifsDetails = (props) => {
  const { params } = props
  // const { gif, setGif } = useContext(GifContext)

  return (
    <div>
      <GifWrapper byId={params.id} />
    </div>
  )
}

export default GifsDetails
