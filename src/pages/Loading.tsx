// components/Loading.tsx
"use client"
import React from 'react';
import "@/src/app/globals.css";

export default function Loading () {
  return (
  <div className="flex items-center justify-center h-screen">
  <div className=' w-11/12 md:w-1/2 font-semibold flex flex-col items-center text-xl md:text-2xl text-center'>
    <div className="w-20 h-[90px] border-8 border-yellow-500 border-solid rounded-full animate-spin " />
    <p className="mt-4 ">Finding learning path recommendations for you based on your response. </p>
  </div>
</div>
  );
};




