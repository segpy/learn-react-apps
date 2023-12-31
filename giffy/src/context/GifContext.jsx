import { createContext, useState } from 'react'

const GifContext = createContext({})

export const GifContextProvider = ({ children }) => {
  const [gif, setGif] = useState([])
  return (
    <GifContext.Provider value={{ gif, setGif }}>
      {children}
    </GifContext.Provider>
  )
}

export default GifContext
