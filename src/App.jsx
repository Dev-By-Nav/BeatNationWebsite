import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'
import Gallery from './Pages/Gallery'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Error from './Pages/Error'
import Dj2 from './Pages/Packages/Dj2'
import Dj1 from './Pages/Packages/Dj1'
import Dj4 from './Pages/Packages/Dj4'
import Dj3 from './Pages/Packages/Dj3'
import Custom from './Pages/Packages/Custom'
import Band from './Pages/Packages/Band'


function App() {
  return (
    <div className=''>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/gallery' element={<Gallery />}></Route>
        <Route exact path='/services' element={<Services />}></Route>
        <Route exact path='/contact-us' element={<Contact />}></Route>

        <Route exact path='/package1' element={<Dj1 />}></Route>
        <Route exact path='/package2' element={<Dj2 />}></Route>
        <Route exact path='/package3' element={<Dj3 />}></Route>
        <Route exact path='/package4' element={<Dj4 />}></Route>
        <Route exact path='/custom-package' element={<Custom />}></Route>
        <Route exact path='/band' element={<Band />}></Route>
        

        <Route path='/*' element={<Error />}></Route>
      </Routes>

    </div>
  )
}

export default App