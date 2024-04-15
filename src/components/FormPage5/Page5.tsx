// Step1.tsx
import React from 'react';
import { MdOutlineStarPurple500 } from "react-icons/md";

export default function Page5 () {
  return (
    <div className='flex flex-col md:flex-row items-center  md:space-x-44 md:text-left my-4 md:h-96 md:my-16 md:pl-24  '>
      <div >
        <img src="/assets/page5/on_your_way.png" alt="goal_message" className='h-[250px] w-[180px] md:h-[340px] md:w-[1000px]  mt-5 pb-10 pt-4 ' />
      </div>
      <div className='my-6 md:my-24 '>
        <p className='text-2xl md:text-3xl mb-8 font-bold'>You're on your way! </p>
        <div className='flex flex-row  justify-center md:justify-start text-3xl md:text-4xl text-yellow-500'>
          <MdOutlineStarPurple500 />
          <MdOutlineStarPurple500 />
          <MdOutlineStarPurple500 />
          <MdOutlineStarPurple500 />
          <MdOutlineStarPurple500 />
        </div>
        <p className='italic my-4'>"Through its engaging and well-structured courses, Brilliant has taught me some of the mathematical concepts that I previously struggled to understand.
          I now feel confident approaching both technical job interviews and real world problem solving situations."</p>
        <p className='italic pt-4'>- Jacob S.</p>
      </div>
    </div>
  );
};


