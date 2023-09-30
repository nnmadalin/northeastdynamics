import React from 'react';
import '.././styles/card_sponsors.css'

const CardSponsors = (props) => {

   const { image_url, redirect_url } = props;

   return (
      <div className='card_sponsors'>
         <a href={redirect_url} target="_blank">
            <img src={image_url} alt='image'/>
         </a>
      </div>
   );
};

export default CardSponsors;