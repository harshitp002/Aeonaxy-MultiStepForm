
"use client"

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Loading from './Loading';
import SuccessComponent from './SuccessComponent';
import "@/src/app/globals.css";



export default function Success () {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    // Redirect to the index page after the loading state is removed
    return () => {
      clearTimeout(timer);
      router.push('/');
    };
  }, []);

  // Display the loading component while transitioning
  if (loading) {
    return <Loading />;
  }


  return (
    <div className=" flex flex-col items-center justify-center md:h-screen text-center my-4 md:my-0">
      <div className='flex flex-col items-center justify-center my-8'>
        <h1 className='font-semibold text-2xl md:text-4xl '>Learning paths based on your answers</h1>
        <p className='font-medium text-base text-neutral-500 mt-6 '>Choose one to get started. You can switch anytime.</p>
      </div>
      <SuccessComponent />
    </div>
  );
};





