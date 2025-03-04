import React from 'react';
import Nav from './Nav';
import Landing from './Landing';
import Footer from './Footer';
import Eleventh from './SecondPage';
import Twelfth from './Downlode';

function Home() {
  return (
    <div data-scroll data-scroll-section className='w-full h-fit xl:bg-black lg:bg-fuchsia-950 md:bg-green-950 sm:bg-red-900 bg-black'>
        <Nav />
        <Landing />
        <Eleventh />
        <Twelfth />
        <Footer />
    </div>
  )
}

export default Home
