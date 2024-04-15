
"use client"
import React from 'react';
import PostMain1 from './PageMain1';

export default function Page1() {
  return (
        <>
          <div className='flex flex-col items-center justify-center my-4 md:my-8'>
            <h1 className='heading md:text-3xl '>Which describes you best?</h1>
            <p className='sub-heading  '>This will help us personalize your experience.</p>
          </div>
          <PostMain1/>
        </>
      );
    }