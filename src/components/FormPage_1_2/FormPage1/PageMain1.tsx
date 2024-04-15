"use client"

import React, { useState, useEffect } from 'react';
import Post from '@/src/components/FormPage_1_2/Post';
// import FormPagePostData1 from 'components/FormPage_1_2/Formpage1/FormPagePostData1';
import FormPagePostData1 from './FormPagePostData1';


export default function PageMain1 () {
 
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
      <div >
        {FormPagePostData1.map((post) => (
          <Post
            key={post.id}
            imageSource={post.imageSource}
            postContent={post.postContent}
            id={post.id}
            onPostClick={handlePostClick}
            isSelected={post.id === selectedPostId}
          />
        ))}
      </div>
    </>
  );
}