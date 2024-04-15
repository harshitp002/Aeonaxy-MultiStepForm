
"use client"
import React from 'react';
import PostMain2 from '@/src/components/FormPage_1_2/FormPage2/PageMain2';


export default function Page2() {
  return (
        <>
          <div className='flex flex-col items-center justify-center my-4 md:my-8'>
            <h1 className='heading md:text-3xl'>Which are you most interested in?</h1>
            <p className='sub-heading '>Choose just one.This will help us get you started (but won't limit your experience).</p>
          </div>
          <PostMain2/>
        </>
      );
    }
    