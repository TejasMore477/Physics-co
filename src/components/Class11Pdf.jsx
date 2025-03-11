import React, { useContext } from 'react';
import { DataProvider } from '../utils/Context';
import { Link } from 'react-router-dom';

function Class11Pdf() {
  // Get data from context
  const [data] = useContext(DataProvider);

  // Check if class11 data is loaded
  const class11Data = data?.class11;

  return (
    <div className='w-full text-white lg:px-16 sm:px-10 py-5'>
      <Link to='/'>
        <h1 className='font-extrabold text-4xl text-white cursor-pointer'>
          Physics<span className='text-2xl text-orange-500'>.co</span>
        </h1>
      </Link>

      <h2 className='text-3xl font-bold text-orange-500 text-center lg:pt-0 md:pt-10'>Class 11th Material</h2>

      <div className='mt-10 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 gap-5'>
        {class11Data ? (
          class11Data.map((chap, index) => (
            <div key={index} className='xl:w-56 lg:w-52 h-[40vh] border-[1px] border-gray-900'>
              <h2 className='w-full text-center font-bold text-md mt-3'>{chap.chapter}</h2>
              <div className='mt-4 border-t-[1px] border-gray-700 py-4'>
                {Object.entries(chap.material).map(([mat, url], index) => (
                  <a
                    key={index}
                    href={url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='block px-7 mb-3 cursor-pointer hover:text-orange-400'
                  >
                    {mat}
                  </a>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Class11Pdf;
