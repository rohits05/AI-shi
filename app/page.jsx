// import React from 'react'
import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      {/* Discover & Share */}
      Unleash AI-shi
      <br className='max-md:hidden' />
      <p className='orange_gradient text-center'> AI-Powered Prompts</p>
    </h1>
    <p className='desc text-center'>
     Discover, create and share creative prompts with the world.
     <br></br> So, what are you waiting for? 
    {/* Simply sit back and allow Open-AI's powerful GPT-3 engine to generate prompts directly into your browser. */}
    </p>

    <Feed />
  </section>
);

export default Home;