import '../styles/NotFound.css';
import React, { useState } from 'react';

import logo from '.././assets/images/logo_full.png'


function Home() {

   return (
      <main>
         <div className='not_found'>
            <h1>404</h1>
            <img src={logo} alt="img" />
            <h2>Page Not Found</h2>
            <br />
            <a href='./'>Go Home</a>
         </div>
      </main>
   );
}

export default Home;
