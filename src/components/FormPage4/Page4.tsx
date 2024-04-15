import React from 'react';
import PostMain4 from './PageMain4';

export default function Page4 () {

  return (
    <div className='my-3 md:my-16'>
      <div className='flex flex-col items-center justify-center my-4 md:my-8'>
        <h1 className='heading  md:text-3xl'>What is your math comfort level?</h1>
        <p className='sub-heading '>Choose the highest level you feel confident in - you can always adjust later.</p>
      </div>
      <PostMain4/>
    </div>
  );
};


