import React from 'react';
import '.././styles/card_results.css'

const CardResults = (props) => {

   const { image_url, position, title, description } = props;

   return (
      <div className={'card_results card_results_' + position}>
         <div className='left'>
            <img src={image_url} alt='image'/>
         </div>
         <div className='right'>
            <h1>{title}</h1>
            <h2>{description}</h2>
         </div>
      </div>
   );
};

export default CardResults;