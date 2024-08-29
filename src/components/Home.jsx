import React from 'react';
import Nav from './Nav';
import Landing from './Landing';
import Footer from './Footer'
import Eleventh from './SecondPage';
import Twelfth from './Downlode';

function Home() {
  return (
    <div data-scroll data-scroll-section className='w-full h-fit bg-black'>
        <Nav />
        <Landing />
        <Eleventh />
        <Twelfth />
        <Footer />
    </div>
  )
}

export default Home
