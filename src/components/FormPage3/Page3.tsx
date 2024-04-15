
import React from 'react';

export default function Page3 () {
  return (
    <div className="flex flex-col md:flex-row items-center  md:space-x-44 md:text-left my-4  md:h-96 md:w-4/5 md:my-16 p-4 ">
      <div >
        <img src="/assets/page3/goal_message.png" alt="goal_message" className="h-[250px] w-[180px] md:h-[340px] md:w-[800px]" />
      </div>
      <div className="my-6 md:my-24">
        <p className="text-2xl md:text-3xl mb-8 font-bold">You're in the right place </p>
        <p>Brilliant gets you hands-on to help improve your professional skills and knowledge.
          You'll interact with concepts and solve fun problems in math, science, and computer.</p>
      </div>
    </div>
  );
};


