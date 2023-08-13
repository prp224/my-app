import './App.css'

import {useState, useEffect} from 'react'
import Home from './components/Home'
import About from './components/About'
import Work from './components/Work'
import Hobbies from './components/Hobbies'
import Navbar from './components/Navbar'
import Cover from './components/Cover'
import Education from './components/Education'


function App() {
  return (

    <div className="App">
      <Navbar />
      <Cover />
      <About /> 
      <Education />
      <Work />
      <Hobbies />

    </div>
  );
}

export default App;
