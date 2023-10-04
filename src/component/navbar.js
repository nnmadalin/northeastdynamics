import React, { useState, useEffect } from 'react';

import { scroller } from 'react-scroll';

import { AiOutlineMenu } from "react-icons/ai";


import '.././styles/Navbar.css'
import logo from '.././assets/images/logo.png'
import logo_full from '.././assets/images/logo_full.png'

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
         document.querySelector('nav').querySelector('.nav_mobile').classList.remove('show');
      }
      else {
         document.body.classList.add('overflow-hidden');
         document.querySelector('nav').classList.add('show');
         document.querySelector('nav').querySelector('.left').classList.add('show');
         document.querySelector('nav').querySelector('.right').classList.add('show');
         document.querySelector('nav').querySelector('.center').classList.add('show');
         document.querySelector('nav').querySelector('.nav_mobile').classList.add('show');
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
      }, 3000);
      
      const id_name = window.location.hash.substr(1);
      const id_name_2 = window.location.pathname.split('/');
      const links = document.querySelector('nav').querySelectorAll('a');
      for (const link of links) {
         if ((link.name === id_name || link.name === id_name_2[1]) && link.name != "") {
            link.classList.add('active');
         } else {
            link.classList.remove('active');
         }
      }

      return () => clearTimeout(timer);
   }, []);


   return (
      <>
         <nav>
            <div className="left">
               <a
                  data-text="About us"
                  name = "about"
                  href="/#about"
                  onClick={removeNavbar}
               >About us</a>
               <a
                  data-text="Our results"
                  name = "results"
                  href="/#results"
                  onClick={removeNavbar}
               >Our results</a>
               <a
                  data-text="Sponsors"
                  name = "sponsors"
                  href="/#sponsors"
                  onClick={removeNavbar}
               >Sponsors</a>
               <a
                  data-text="Media"
                  name = "media"
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
               <a href="./support-us" data-text="Support the team" name="support-us">Support the team</a>
               <a href="./our-team" data-text="Our team" name="our-team">Our team</a>
               <a href="./portofolio" data-text="Portofolio" name="portofolio">Portofolio</a>
               <a href="./contact" data-text="Contact" name="contact">Contact</a>
            </div>
            {showButton && (
               <div className='nav_mobile'>
                  <a href='/'>
                     <img src={logo_full} alt="img" />
                  </a>
                  <button onClick={handleSubmit} className="close_nav"><AiOutlineMenu /></button>
               </div>
            )}
         </nav>
      </>
   );
}

export default NavBar;
