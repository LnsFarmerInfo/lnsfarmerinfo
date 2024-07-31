'use client'
import React, { useEffect } from 'react'
const Navbar = (props) => {
  useEffect(() => {
    const hamburgerIcon = document.querySelector('.hamburger-icon-div');
    const hamburgerDiv = document.querySelector('.hamburger-nav');

    hamburgerIcon.addEventListener('click', function () {
      hamburgerDiv.style.transform = 'translate(0%)';
      hamburgerDiv.style.opacity = 1;
    })

    hamburgerDiv.addEventListener('click', function (e) {
      if (e.target == document.querySelector('.hamburger-nav li')) {
        return;
      }
      hamburgerDiv.style.transform = 'translate(-120%)';
      hamburgerDiv.style.opacity = 0;
    })




  })

  return (
    <>
      <nav className='navbar'>
        <div className='hamburger-icon-div'><img src='/assets/hamburger.png' className='hamburger-icon' alt="" /></div>
        <div className="hamburger-nav">
          <img src='/assets/hamburger.png' className='h-20 p-2 absolute left-10 top-16' alt="" />
          <ul>
            <li><a href="/">HOME</a></li>
            {props.internship == "true" ? <><li><a href='/internship/instructions' className='uppercase'>Instructions</a></li></> : <><li><a href="#section-2">INNOVATIONS</a></li>
              <li><a href="#section-3">ABOUT</a></li>
              <li><a href='/internship'>INTERNSHIPS</a></li>
            </>}
          </ul>
        </div>
        <img src='/assets/Logo.png' alt="logo" />
        <ul>
          <li><a href="/">HOME</a></li>
          {props.internship == "true" ? <><li><a href='/internship/instructions'>Instructions</a></li></> : <><li><a href="#section-2">INNOVATIONS</a></li>
            <li><a href="#section-3">ABOUT</a></li>

            <li><a href='/internship'>INTERNSHIPS</a></li>


          </>}
        </ul>
        <img src='/assets/naavic-2.jpg' alt="" />
      </nav>
    </>
  )
}

export default Navbar