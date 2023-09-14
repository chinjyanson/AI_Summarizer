import React from 'react'
import { logo } from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Logo_for_Imperial_College_London.svg/2560px-Logo_for_Imperial_College_London.svg.png" width="50" alt="Imperial Student's Personal Project" className="w-28 object-contain" />
        <button type="button" onClick={() => window.open('https://github.com/chinjyanson/AI_Summarizer')} className="black_btn">
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with <br className='max-md:hidden'/>
        <span className="orange_gradient"> OpenAI GPT-4 </span>
      </h1>
      <h2 className="desc">
        Simpify you reading with Summize, an open-source article summarizer that transforms lengthy articles into clear and consice summaries
      </h2>
    </header>
  )
}

export default Hero