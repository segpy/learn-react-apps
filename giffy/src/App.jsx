import React from 'react'

// Components
// import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import CustomRouter from './routes/Route'

// Styles
import './App.css'

export default function App () {
  return (
    <div className='App'>
      {/* <Navbar /> */}
      <Header />
      <main>
        <CustomRouter />
      </main>
    </div>
  )
}
