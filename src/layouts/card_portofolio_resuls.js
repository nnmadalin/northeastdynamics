import React from 'react';
import '.././styles/card_portofolio_results.css'

const CardPortofolioResults = (props) => {

   const { image_url, location, result} = props;

   return (
      <div className='card_portofolio_results'>
         <div className='image'>
            <img src={image_url} alt='image'/>
         </div>
         <div className='description'>
            <h3>{result}</h3>
            <h4>{location}</h4>
         </div>
      </div>
   );
};

export default CardPortofolioResults;