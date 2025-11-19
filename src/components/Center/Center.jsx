import React from 'react'
import Head from './head'
import Head2 from './main-data'
import Head3 from './head3'
import Head4 from './Head4'

const Center = () => {
  return (
    <div
      className="
        w-[83%] flex flex-col justify-start h-screen
        max-md:w-full 
        max-md:px-4
        max-md:flex
        max-md:flex-col
        max-md:items-center
        max-md:justify-start
      "
    >
      <Head />
      <Head2 />
      <Head3 />
      <Head4 />
    </div>
  );
};

export default Center;

