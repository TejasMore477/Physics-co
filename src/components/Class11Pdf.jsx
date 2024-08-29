import React, { useContext } from 'react';
import { DataProvider } from '../utils/Context';

function Class11Pdf() {
  // Get data from context
  const [data] = useContext(DataProvider);

  // Check if class11 data is loaded
  const class11Data = data?.class11;

  return (
    <div className='w-full text-white px-16 py-5'>
      <div>
        <h1 className='font-extrabold text-4xl text-white cursor-pointer'>
          Physics<span className='text-2xl text-orange-500'>.co</span>
        </h1>
      </div>

      <h2 className='text-3xl font-bold text-orange-500 text-center'>Class 11th Material</h2>

      <div className='mt-10 grid grid-cols-5 gap-5'>
        {class11Data ? (
          class11Data.map((chap, index) => (
            <div key={index} className='w-56 h-[40vh] border-[1px] border-gray-900'>
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
