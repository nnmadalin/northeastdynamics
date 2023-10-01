import React, { useState, useEffect } from 'react';

import { scroller } from 'react-scroll';

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
      if (document.body.classList.contains('overflow-hidden')) {
         document.body.classList.remove('overflow-hidden');
         document.querySelector('nav').classList.remove('show');
         document.querySelector('nav').querySelector('.left').classList.remove('show');
         document.querySelector('nav').querySelector('.right').classList.remove('show');
         document.querySelector('nav').querySelector('.center').classList.remove('show');
      }
      else {
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
      handleResize();
      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   useEffect(() => {
      const timer = setTimeout(() => {
         const navigateToSection = () => {
            const sectionId = window.location.hash.substr(1);
            const element = document.getElementById(sectionId);

            if (element) {
               scroller.scrollTo(sectionId, {
                  duration: 800,
                  delay: 100,
                  smooth: 'easeInOutCubic',
                  offset: -120
               });
            }
         };

         if (window.location.hash) {
            navigateToSection();
         }

         window.addEventListener('hashchange', navigateToSection);

         return () => {
            window.removeEventListener('hashchange', navigateToSection);
         };
      }, 4000);

      return () => clearTimeout(timer);
   }, []);


   return (
      <>
         <nav>
            <div className="left">
               <a
                  data-text="About us"
                  href="/#about"
                  onClick={removeNavbar}
               >About us</a>
               <a
                  data-text="Our results"
                  href="/#results"
                  onClick={removeNavbar}
               >Our results</a>
               <a
                  data-text="Sponsors"
                  href="/#sponsors"
                  onClick={removeNavbar}
               >Sponsors</a>
               <a
                  data-text="Media"
                  href="/#media"
                  onClick={removeNavbar}
               >Media</a>
            </div>
            <div className="center">
               <a href='/'>
                  <img src={logo} />
               </a>
            </div>
            <div className="right">
               <a href="./support-us" data-text="Support the team">Support the team</a>
               <a href="./our-team" data-text="Our team">Our team</a>
               <a href="./portofolio" data-text="Portofolio">Portofolio</a>
               <a href="./contact" data-text="Contact">Contact</a>
            </div>
            {showButton && (
               <button onClick={handleSubmit} className="close_nav"><AiOutlineMenu /></button>
            )}
         </nav>
      </>
   );
}

export default NavBar;
