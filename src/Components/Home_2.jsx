import React from 'react'
import ReactLogo from './Images/React-Logo.png'
import javascript from './Images/javascript.png'
import html from './Images/html.png'
import cLangauga from './Images/cLangauga.png'
import css from './Images/css.png'


export default function Home_2() {
  return (
    <div>
      <div>
        <ul className='flex justify-evenly items-center gap-10 px-10 flex-wrap mt-10 '>
          <li className='w-60'>
            <img src = {ReactLogo} alt="React" />
          </li>
          <li className='w-60'>
            <img src={javascript} alt="js" />
          </li>
          <li className='w-40'>
            <img src={cLangauga} alt="C Language" />
          </li>
          <li className='w-40'>
            <img src = {html} alt="html" />
          </li>
          <li className='w-80'>
            <img src={css} alt="css" />
          </li>
        </ul>
      </div>
    </div>
  )
}
