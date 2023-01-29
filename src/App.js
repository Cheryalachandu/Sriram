import React from 'react'
import { Navbar } from './components/Navbar'
import { Search } from './components/Search'
import { Card } from './components/Card'
import "./App.css"

function App() {
  return (
    <div className='app'>
       <Navbar />
       <Search />
       <div className='card__container'>
       <Card />
       <Card />
       </div>
    </div>
  )
}

export default App
