import React, { useState } from 'react';
import Lightbox from "react-modal-image";


import img1 from '.././assets/foto_gallery/9a3393c0-5fbc-4713-999a-847284b54be1.JPG'
import img2 from '.././assets/foto_gallery/43b087f6-ee0a-4fe2-a7c4-9ccd6038066b.JPG'
import img3 from '.././assets/foto_gallery/49fa9220-2766-49b6-af26-e8bd52f54775.JPG'
import img4 from '.././assets/foto_gallery/909ed3d8-00ac-4b3c-bf83-30fc15419d9e.JPG'
import img5 from '.././assets/foto_gallery/9416E384-378F-4D95-ADEF-A235257B40DF.JPG'
import img7 from '.././assets/foto_gallery/IMG_1114.jpg'

import img8 from '.././assets/foto_gallery/IMG_2726.jpg'
import img9 from '.././assets/foto_gallery/IMG_2766.jpg'
import img10 from '.././assets/foto_gallery/IMG_2770.jpg'
import img11 from '.././assets/foto_gallery/IMG_2772.jpg'
import img12 from '.././assets/foto_gallery/IMG_2796.jpg'
import img13 from '.././assets/foto_gallery/IMG_3164.jpg'
import img14 from '.././assets/foto_gallery/IMG_4182.jpg'

import img15 from '.././assets/foto_gallery/IMG_2726.jpg'
import img16 from '.././assets/foto_gallery/IMG_4262.jpg'
import img17 from '.././assets/foto_gallery/IMG_4280.jpg'
import img18 from '.././assets/foto_gallery/IMG_4485.jpg'
import img19 from '.././assets/foto_gallery/IMG_4517.jpg'
import img20 from '.././assets/foto_gallery/IMG_4586.jpg'
import img21 from '.././assets/foto_gallery/IMG-20220906-WA0007.JPG'

import img22 from '.././assets/foto_gallery/IMG-20220906-WA0013.JPG'
import img23 from '.././assets/foto_gallery/IMG-20220906-WA0008.JPG'
import img24 from '.././assets/foto_gallery/IMG-20220906-WA0011.JPG'
import img25 from '.././assets/foto_gallery/IMG-20220906-WA0012.JPG'

const CardGallery = (props) => {

   const [loadedImages, setLoadedImages] = useState({});

   const handleImageLoad = (src) => {
      setLoadedImages({ ...loadedImages, [src]: true });
   };

   const img_col1 = [img1, img2, img3, img4, img5, img7, img13];
   const img_col2 = [img8, img9, img10, img11, img12];
   const img_col3 = [img15, img16, img17, img18, img19];
   const img_col4 = [img21, img22, img23, img24, img25, img14, img20];


   return (
      <>
         <div className="column">
            {img_col1.map((src, index) => (
               <Lightbox className="image" small={src} large={src} />
            ))}
         </div>

         <div className="column">
            {img_col2.map((src, index) => (
               <Lightbox className="image" small={src} large={src} />
            ))}
         </div>

         <div className="column">
            {img_col3.map((src, index) => (
               <Lightbox className="image" small={src} large={src} />
            ))}
         </div>

         <div className="column">
            {img_col4.map((src, index) => (
               <Lightbox className="image" small={src} large={src} />
            ))}
         </div>
      </>
   );
};

export default CardGallery;