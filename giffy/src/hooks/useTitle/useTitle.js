import { useEffect, useState } from 'react'
import { useLocation } from 'wouter'
import { URLS } from '../../utils/Urls/urlsUtils'

const useTitle = () => {
  const [location] = useLocation()
  const [title, setTitle] = useState('')
  const [desription, setDesription] = useState('')

  useEffect(() => {
    console.log('location', location)
    const myUrl = URLS.find(({ path }) => {
      return location.includes(path)
    })
    const { title: myTitle, description: myDesription } = myUrl || {
      title: '404',
      description: 'Page not found'
    }
    setTitle(myTitle)
    setDesription(myDesription)

    // Set title and description
    // document.querySelector('meta[name="description"]').setAttribute('content', desription)
    // document.title = `${title} | Giffy`
  }, [location, title, desription])

  return {
    title,
    desription
  }
}

export default useTitle
