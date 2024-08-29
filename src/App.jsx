import React from 'react';
import Home from './components/Home'
import LocomotiveScroll from 'locomotive-scroll';
import {Routes ,Route } from 'react-router-dom';
import Class11Pdf from './components/Class11Pdf';
import Class12Pdf from './components/Class12Pdf';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='bg-black'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/class11' element={<Class11Pdf />}/>
        <Route path='/class12' element={<Class12Pdf />}/>
      </Routes>
    </div>
  )
}

export default App