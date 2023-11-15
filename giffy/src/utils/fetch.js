import { API_URL, API_KEY } from './apiUtils'

const commonParams = {
  api_key: API_KEY,
  rating: 'g'
}

const makeUrl = (path, specificParam, backendUrl = API_URL) => {
  const params = { ...commonParams, ...specificParam }
  const urlParams = new URLSearchParams(params)
  const url = `${backendUrl}${path}?${urlParams}`
  return url
}

const _GET = (path, params = {}) => {
  const url = makeUrl(path, params)
  // console.log(url)
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const request = window.fetch(url, options)
  return request
}

const GET = (path, params = {}) => {
  const request = _GET(path, params)
  return request
    .then((res) => {
      if (!res.ok) {
        throw new Error('Error en la petición')
      }
      return res.json()
    })
    .catch(() => {
      throw new Error('Error en la petición')
    })
}

export const HttpClient = {
  GET
}
