import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'
import Gallery from './Pages/Gallery'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Error from './Pages/Error'


function App() {
  return (
    <div className='bg-bn-navy'>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/gallery' element={<Gallery />}></Route>
        <Route exact path='/services' element={<Services />}></Route>
        <Route exact path='/contact-us' element={<Contact />}></Route>

        <Route path='/*' element={<Error />}></Route>
      </Routes>

    </div>
  )
}

export default App