import React from 'react'
import './About.css'
// import reacticon from './assets/react-2.svg'
import reactIcon from '/react-2.svg';
import cssIcon from '/css-3.svg';
import htmlIcon from '/html-1.svg';
import jsIcon from '/javascript-1.svg';
import gitIcon from '/git-icon.svg';
import tailwindCss from '/tailwind-css.png';

const About = () => {
  return (
    <div id="about" className='container about inter'>
      <h2>
        <span>H</span>
        <span>e</span>
        <span>l</span>
        <span>l</span>
        <span>o</span>
        <span>!</span>
      </h2>
      <div className='text-cont-cont'>
        <div className='text-cont'>
          <p className='text'>I am Paull</p>
        </div>
      </div>
      <h3>FRONT-END <span>WEB DEVELOPER</span></h3>
      <p>A passionate Frontend web developer and UI/UX enthusiast specialized in building
        interactive and responsive websites.
      </p>
      <h3 className='skills'>Skills</h3>
      <div className='skill-icons'>
        <div className='skill-icons-slide'>
          <div>
            <img src={reactIcon} />
          </div>
          <div>
            <img src={jsIcon} />
          </div>
          <div>
            <img src={cssIcon} />
          </div>
          <div>
            <img src={htmlIcon} />
          </div>
          <div>
            <img src={gitIcon} />
          </div>
          <div>
            <img src={tailwindCss} />
          </div>
        </div>
        <div className='skill-icons-slide'>
          <div>
            <img src={reactIcon} />
          </div>
          <div>
            <img src={jsIcon} />
          </div>
          <div>
            <img src={cssIcon} />
          </div>
          <div>
            <img src={htmlIcon} />
          </div>
          <div>
            <img src={gitIcon} />
          </div>
          <div>
            <img src={tailwindCss} />
          </div>
        </div>
        <div className='skill-icons-slide'>
          <div>
            <img src={reactIcon} />
          </div>
          <div>
            <img src={jsIcon} />
          </div>
          <div>
            <img src={cssIcon} />
          </div>
          <div>
            <img src={htmlIcon} />
          </div>
          <div>
            <img src={gitIcon} />
          </div>
          <div>
            <img src={tailwindCss} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About