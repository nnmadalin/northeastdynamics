import React from 'react';
import '.././styles/card_portofolio_results.css'

const CardNotebook = (props) => {

   const { image_url, redirect, title} = props;

   return (
      <a href={redirect} target='_blank'>
         <div className='card_notebook'>
            <div className='image'>
               <img src={image_url} alt='image'/>
            </div>
            <div className='description'>
               <h3>{title}</h3>
            </div>
         </div>
      </a>
   );
};

export default CardNotebook;