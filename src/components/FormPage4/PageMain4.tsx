"use client"

import React, { useState, useEffect } from 'react';
import Post4 from './Post4';
import FormPagePostData4 from './FormPagePostData4';

export default function PostMain4() {
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

  useEffect(() => {
    const savedSelectedPostId = localStorage.getItem('selectedPostId');
    if (savedSelectedPostId) {
      setSelectedPostId(parseInt(savedSelectedPostId, 10));
    }
  }, []);

  useEffect(() => {
    if (selectedPostId !== null) {
      localStorage.setItem('selectedPostId', selectedPostId.toString());
    }
  }, [selectedPostId]);

  const handlePostClick = (id: number) => {
    setSelectedPostId(id);
  };

  return (
    <>
      <div className='flex flex-col md:flex-row items-center md:space-x-4  mx-14 md:mx-20 md:my-12'>
        {FormPagePostData4.map((post) => (
          <Post4
            key={post.id}
            equation={post.equation}
            subject={post.subject}
            level={post.level}
            id={post.id}
            onPostClick={handlePostClick}
            isSelected={post.id === selectedPostId}
          />
        ))}
      </div>
    </>
  );
}