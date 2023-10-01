import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import React, { useState, useEffect } from 'react';

import { AiOutlineMenu } from "react-icons/ai";


import '.././styles/Navbar.css'
import logo from '.././assets/images/logo.png'

function NavBar() {
   const removeNavbar = () => {
      document.body.classList.remove('overflow-hidden');
      document.querySelector('nav').classList.remove('show');
      document.querySelector('nav').querySelector('.left').classList.remove('show');
      document.querySelector('nav').querySelector('.right').classList.remove('show');
      document.querySelector('nav').querySelector('.center').classList.remove('show');
   };

   const [showButton, setShowButton] = useState(false);

   function handleSubmit(e) {
      e.preventDefault();
      if(document.body.classList.contains('overflow-hidden')){
         document.body.classList.remove('overflow-hidden');
         document.querySelector('nav').classList.remove('show');
         document.querySelector('nav').querySelector('.left').classList.remove('show');
         document.querySelector('nav').querySelector('.right').classList.remove('show');
         document.querySelector('nav').querySelector('.center').classList.remove('show');
      }
      else{
         document.body.classList.add('overflow-hidden');
         document.querySelector('nav').classList.add('show');
         document.querySelector('nav').querySelector('.left').classList.add('show');
         document.querySelector('nav').querySelector('.right').classList.add('show');
         document.querySelector('nav').querySelector('.center').classList.add('show');
      }
   }

   useEffect(() => {
      const handleResize = () => {
         if (window.innerWidth < 1000) {
            setShowButton(true);
         } else {
            setShowButton(false);
         }
      };

      window.addEventListener('resize', handleResize);

      // Verifică lățimea la încărcarea paginii
      handleResize();

      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   return (
      <>
         <nav>
            <div className="left">
               <Link
                  data-text="About us"
                  to="about"
                  onClick={removeNavbar}
                  spy={true}
                  isDynamic={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  delay={100}

               >About us</Link>
               <Link
                  data-text="Our results"
                  to="results"
                  onClick={removeNavbar}
                  spy={true}
                  isDynamic={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  delay={100}
               >Our results</Link>
               <Link
                  data-text="Sponsors"
                  to="sponsors"
                  onClick={removeNavbar}
                  spy={true}
                  isDynamic={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  delay={100}
               >Sponsors</Link>
               <Link
                  data-text="Media"
                  to="media"
                  onClick={removeNavbar}
                  spy={true}
                  isDynamic={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  delay={100}
               >Media</Link>
            </div>
            <div className="center">
               <a href='/'>
                  <img src={logo} />
               </a>
            </div>
            <div className="right">
               <a href="#" data-text="Support the team">Support the team</a>
               <a href="#" data-text="Our team">Our team</a>
               <a href="#" data-text="Portofolio">Portofolio</a>
               <a href="#" data-text="Contact">Contact</a>
            </div>
            {showButton && (
               <button onClick={handleSubmit} className="close_nav"><AiOutlineMenu /></button>
            )}
         </nav>
      </>
   );
}

export default NavBar;
