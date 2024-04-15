
"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import DOMPurify from 'dompurify';

interface PostProps {
  imageSource: string;
  postContent: string;
  id: number;
  onPostClick: (id: number) => void;
  isSelected: boolean;
}

export default function Post ({
  imageSource,
  postContent,
  id,
  onPostClick,
  isSelected,

}:PostProps ){
  const [isHovered, setIsHovered] = useState(false);
  

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handlePostClick = () => {
    onPostClick(id);    
  };
 
  const postBorderColor = isHovered ? 'border-yellow-500 shadow-s' : 'border-neutral-300';
  const postselected = isSelected ? 'bg-emerald-600/95 shadow-s border-none text-white' : `${postBorderColor}`;

  return (
    <div
      className={` flex items-center justify-start w-[320px] md:w-[520px]  h-[70px] border-[1px] border-solid ${postselected } rounded-md my-3 cursor-pointer transition duration-300 ease-in-out`}
      onClick={handlePostClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
        <div className="h-[42px] w-[52px] m-1 relative">
          <Image src={imageSource} alt="Post" fill className="h-[50px] w-[60px] m-1" />
        </div>
        <div className="my-[20px] ml-[12px] text-left">
          <div 
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(postContent),
            }}
          />
        </div>
    </div>
  );
};

