import React from 'react'
import { Helmet } from 'react-helmet'

// Components
// import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import CustomRouter from './routes/Route'

// Styles
import './App.css'
import useTitle from './hooks/useTitle/useTitle'

export default function App () {
  const { desription, title } = useTitle()

  return (
    <div className='App'>
      <Helmet>
        <title>{`${title} | Giffy`}</title>
        <meta name='description' content={desription} />
      </Helmet>
      {/* <Navbar /> */}
      <Header />
      <main>
        <CustomRouter />
      </main>
    </div>
  )
}
