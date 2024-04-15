"use client"

import React, { useState } from 'react';
import Image from 'next/image';

interface PostProps {
    equation: string;
    subject: string;
    level: string;
    id: number;
    onPostClick: (id: number) => void;
    isSelected: boolean;
}

export default function Post4 ({
    equation,
    subject,
    level,
    id,
    onPostClick,
    isSelected,

}:PostProps)  {
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
    const postselected = isSelected ? 'bg-emerald-600/95 shadow-s border-none ' : `${postBorderColor}`;

    return (
        <div
            className={`w-56 h-48 border-[1px] border-solid ${postselected} rounded-md my-3 cursor-pointer transition duration-300 ease-in-out`}
            onClick={handlePostClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="flex flex-col items-center justify-start mt-8  ">
                <div className="h-16 w-48 relative ">
                    <Image src={equation} alt="Post" fill className="" />
                </div>
                <div className="mt-4 mb-2 ">
                    <p>{subject}</p>
                </div>
                <div className=" text-xl text-neutral-400 font-light ">
                    <p>{level}</p>
                </div>
            </div>
        </div>
    );
};

