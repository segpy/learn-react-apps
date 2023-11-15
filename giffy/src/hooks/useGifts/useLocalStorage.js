import { useEffect, useState } from 'react'

const useLocalStorage = () => {
  const [localSearch, setLocalSearch] = useState(window.localStorage.getItem('lastKeyword'))
  useEffect(() => {
    setLocalSearch(localStorage.getItem('lastKeyword'))
  }, [])

  return {
    localSearch
  }
}

export default useLocalStorage
