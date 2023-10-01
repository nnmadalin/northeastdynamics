import React, { useState, useEffect } from 'react';

import '.././styles/Loading.css'
import logo from '.././assets/images/logo_full.png'

function Loading() {

   return (
      <>
         <main>
            <div className='loading'>
               <img src={logo} alt="img" />
               <div className='anim'>
                  <span className="loader"><span className="loader-inner"></span></span>
               </div>
            </div>
         </main>
      </>
   );
}

export default Loading;
