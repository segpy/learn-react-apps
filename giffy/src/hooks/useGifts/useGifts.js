import { useState, useEffect } from 'react'

// Api
import { getGifById, getGifs } from '../../utils/Api/getGifs'

const useGifts = ({ keyword = 'panda', byId } = {}) => {
  const [loading, setLoading] = useState(false)
  const [gifs, setGifs] = useState([])
  const [requestError, setRequestError] = useState(false)
  const [limit, setLimit] = useState(25)
  const [page, setPage] = useState(0)

  useEffect(() => {
    setLoading(true)
    if (byId) {
      getGifById(byId)
        .then((data) => {
          setGifs(data)
        })
        .catch((error) => {
          console.log(error)
          setRequestError(true)
        })
        .finally(() => setLoading(false))
      return
    }

    getGifs({ keyword, limit, page })
      .then((data) => {
        setGifs(prev => [...prev, ...data])
      })
      .catch((error) => {
        console.log(error)
        setRequestError(true)
      })
      .finally(() => setLoading(false))
  }
  , [keyword, byId, limit, page])

  return {
    gifs,
    page,
    setPage,
    setLimit,
    requestError,
    loading
  }
}

export default useGifts
