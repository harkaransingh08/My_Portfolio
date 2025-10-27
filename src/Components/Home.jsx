import React from 'react'
import image_2 from './images/image_2.png';

export default function Home() {
  return (
    <div className='flex justify-evenly py-20'>

    <ul className='max-w-xl text-justify leading-relaxed text-white font-medium arial text-lg text-balance'>
      <p>I’m Monkey, a curious mind trapped in a suit, driven by instinct and imagination. I believe in solving complex problems with simple ideas, learning fast, and adapting faster. Whether it’s coding, creating, or just figuring out how the world works, I approach every challenge with a mix of logic, curiosity, and a bit of wild energy. Intelligence may have evolved, but curiosity never left the jungle.</p>
    </ul>

    <ul >
      <img src={image_2} alt="image" 
      className='flex rounded-full  h-70  bg-[#0b0033]'
      />
    </ul>

    </div>
  )
}
