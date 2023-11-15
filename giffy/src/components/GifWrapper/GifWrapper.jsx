import React from 'react'
import RequestError from '../Errors/RequestError'
import Loading from '../Loading/Loading'
import NotFound from '../Errors/NotFound'
import GifList from '../GifList/GifList'
import useGifts from '../../hooks/useGifts/useGifts'
import MasonryGifList from '../GifList/MasonryItemsList'

const GifWrapper = ({ keyword, byId }) => {
  const { gifs, page, setPage, requestError, loading } = useGifts({ keyword, byId })
  if (requestError) {
    return <RequestError />
  }
  if (gifs.length === 0 && !loading) {
    return <NotFound />
  }
  if (gifs.length === 1 && !loading) {
    return <GifList gifs={gifs} />
  }
  return (
    <>
      <MasonryGifList itemData={gifs} page={page} setPage={setPage} />
      {loading && <Loading />}
    </>
  )
}
export default GifWrapper
