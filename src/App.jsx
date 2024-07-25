// import React from 'react'
import './App.css'
import Home from './components/home/Home'
import Contactus from './components/contact/Contactus'
import Navbar from './components/navbar/Navbar'
import Academics from './components/academics/Academics'
import Admission from './components/admission/Admission'
import Faculty from './components/faculty/Faculty'
import Students from './components/students/Students'
import Gallery from './components/gallary/Gallary'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="hero">
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contactus' element={<Contactus/>}/>
            <Route path='/academics' element={<Academics/>}/>
            <Route path='/admission' element={<Admission/>}/>
            <Route path='/faculty' element={<Faculty/>}/>
            <Route path='/students' element={<Students/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
          </Routes>
        </Router>
    </div>
  )
}

export default App
