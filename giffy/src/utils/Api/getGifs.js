import { GIFS_PATH, SEARCH_PATH } from '../../domain/Path'
import GifMapper from '../Mapper/gifMapper'
import { HttpClient } from '../fetch'

export const getGifById = (id) => {
  return HttpClient.GET(`${GIFS_PATH}/${id}`)
    .then((data) => {
      // console.log(data.data.images)
      const mappedData = GifMapper.mapGifList([data.data])
      return mappedData
    })
    .catch((error) => {
      throw new Error(error)
    })
}

export const getGifs = ({ keyword = 'panda', limit = 25, page = 0 } = {}) => {
  return HttpClient.GET(SEARCH_PATH, { q: keyword, limit, offset: page * limit })
    .then((data) => {
      // console.log(data.data)
      const mappedData = GifMapper.mapGifList(data.data)
      // console.log(mappedData)
      return mappedData
    })
    .catch((error) => {
      console.log(error)
      throw new Error(error)
    })
}
