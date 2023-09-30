import React from 'react';
import '.././styles/card_social.css'


import instagram from '.././assets/images/instagram.png'
import facebook from '.././assets/images/facebook.png'
import youtube from '.././assets/images/youtube.png'
import tiktok from '.././assets/images/tiktok.png'

export const CardSocial_Instagram = (props) => {

   const {image_url, description, redirect_url } = props;

   return (
      <div className='card_social instagram'>
         <div className='app'>
            <img src={instagram}></img>
            <p>Instragram</p>
         </div>
         <div className='post'>
            <div className='image'>
               <img src={image_url} alt='image'/>
            </div>
            <p>{description}</p>
            <div className='submit'>
               <a href={redirect_url} target="_blank">Read more</a>
            </div>
         </div>
      </div>
   );
};

export const CardSocial_Facebook = (props) => {

   const {image_url, description, redirect_url } = props;

   return (
      <div className='card_social facebook'>
         <div className='app'>
            <img src={facebook}></img>
            <p>Facebook</p>
         </div>
         <div className='post'>
            <div className='image'>
               <img src={image_url} alt='image' />
            </div>
            <p>{description}</p>
            <div className='submit'>
               <a href={redirect_url} target="_blank">Read more</a>
            </div>
         </div>
      </div>
   );
};

export const CardSocial_Youtube = (props) => {

   const {image_url, description, redirect_url } = props;

   return (
      <div className='card_social youtube'>
         <div className='app'>
            <img src={youtube}></img>
            <p>Youtube</p>
         </div>
         <div className='post'>
            <div className='image'>
               <img src={image_url} alt='image'/>
            </div>
            <p>{description}</p>
            <div className='submit'>
               <a href={redirect_url} target="_blank">Watch this</a>
            </div>
         </div>
      </div>
   );
};

export const CardSocial_TikTok = (props) => {

   const {image_url, description, redirect_url } = props;

   return (
      <div className='card_social tiktok'>
         <div className='app'>
            <img src={tiktok}></img>
            <p>TikTok</p>
         </div>
         <div className='post'>
            <div className='image'>
               <img src={image_url} alt='image'/>
            </div>
            <p>{description}</p>
            <div className='submit'>
               <a href={redirect_url} target="_blank">Read more</a>
            </div>
         </div>
      </div>
   );
};
