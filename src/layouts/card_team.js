import React from 'react';

import { FaInstagram, FaFacebook, FaPager} from "react-icons/fa";


import '.././styles/card_team.css'

const CardTeam = (props) => {

   const { image_url, full_name, occupation, instagram, facebook, website, id_name} = props;

   return (
      <div className='card_team' id = {id_name}>
         {image_url != null && (
            <div className='image'>
               <img src={image_url} alt="img" />
            </div>
            )
         }
         <div className='name_description'>
            <span className='full_name'>{full_name}</span>
            <span className='occupation'>{occupation}</span>
            {(instagram != null || facebook != null || website != null) && (
               <div className='team_social'>
                  {instagram != null && (
                     <a href={instagram} target="_blank"><FaInstagram /></a>
                     )
                  }
                  {facebook != null && (
                     <a href={facebook} target="_blank"><FaFacebook /></a>
                     )
                  }
                  {website != null && (
                     <a href={website} target="_blank"><FaPager /></a>
                     )
                  }
               </div>
               )
            }
         </div>
      </div>
   );
};

export default CardTeam;