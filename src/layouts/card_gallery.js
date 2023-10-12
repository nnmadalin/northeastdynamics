import React, { useState } from 'react';
import Lightbox from "react-modal-image";


import img1 from '.././assets/foto_gallery/9.10.2023/9a3393c0-5fbc-4713-999a-847284b54be1.JPG'
import img2 from '.././assets/foto_gallery/9.10.2023/43b087f6-ee0a-4fe2-a7c4-9ccd6038066b.JPG'
import img3 from '.././assets/foto_gallery/9.10.2023/49fa9220-2766-49b6-af26-e8bd52f54775.JPG'
import img4 from '.././assets/foto_gallery/9.10.2023/909ed3d8-00ac-4b3c-bf83-30fc15419d9e.JPG'
import img5 from '.././assets/foto_gallery/9.10.2023/9416E384-378F-4D95-ADEF-A235257B40DF.JPG'
import img7 from '.././assets/foto_gallery/9.10.2023/IMG_1114.jpg'
import img8 from '.././assets/foto_gallery/9.10.2023/IMG_2726.jpg'
import img9 from '.././assets/foto_gallery/9.10.2023/IMG_2766.jpg'
import img10 from '.././assets/foto_gallery/9.10.2023/IMG_2770.jpg'
import img11 from '.././assets/foto_gallery/9.10.2023/IMG_2772.jpg'
import img12 from '.././assets/foto_gallery/9.10.2023/IMG_2796.jpg'
import img13 from '.././assets/foto_gallery/9.10.2023/IMG_3164.jpg'
import img14 from '.././assets/foto_gallery/9.10.2023/IMG_4182.jpg'
import img15 from '.././assets/foto_gallery/9.10.2023/IMG_2726.jpg'
import img16 from '.././assets/foto_gallery/9.10.2023/IMG_4262.jpg'
import img17 from '.././assets/foto_gallery/9.10.2023/IMG_4280.jpg'
import img18 from '.././assets/foto_gallery/9.10.2023/IMG_4485.jpg'
import img19 from '.././assets/foto_gallery/9.10.2023/IMG_4517.jpg'
import img20 from '.././assets/foto_gallery/9.10.2023/IMG_4586.jpg'
import img21 from '.././assets/foto_gallery/9.10.2023/IMG-20220906-WA0007.JPG'
import img22 from '.././assets/foto_gallery/9.10.2023/IMG-20220906-WA0013.JPG'
import img23 from '.././assets/foto_gallery/9.10.2023/IMG-20220906-WA0008.JPG'
import img24 from '.././assets/foto_gallery/9.10.2023/IMG-20220906-WA0011.JPG'
import img25 from '.././assets/foto_gallery/9.10.2023/IMG-20220906-WA0012.JPG'


import img26 from '.././assets/foto_gallery/12.10.2023/WhatsApp Image 2023-10-12 at 13.03.43.jpeg'
import img27 from '.././assets/foto_gallery/12.10.2023/WhatsApp Image 2023-10-12 at 13.03.44 (1).jpeg'
import img28 from '.././assets/foto_gallery/12.10.2023/WhatsApp Image 2023-10-12 at 13.03.44 (2).jpeg'
import img29 from '.././assets/foto_gallery/12.10.2023/WhatsApp Image 2023-10-12 at 13.03.44.jpeg'
import img30 from '.././assets/foto_gallery/12.10.2023/WhatsApp Image 2023-10-12 at 13.03.46.jpeg'
import img31 from '.././assets/foto_gallery/12.10.2023/WhatsApp Image 2023-10-12 at 13.03.47 (1).jpeg'
import img32 from '.././assets/foto_gallery/12.10.2023/WhatsApp Image 2023-10-12 at 13.03.47.jpeg'
import img33 from '.././assets/foto_gallery/12.10.2023/WhatsApp Image 2023-10-12 at 13.03.48 (1).jpeg'
import img34 from '.././assets/foto_gallery/12.10.2023/WhatsApp Image 2023-10-12 at 13.03.48.jpeg'
import img35 from '.././assets/foto_gallery/12.10.2023/WhatsApp Image 2023-10-12 at 13.03.49.jpeg'
import img36 from '.././assets/foto_gallery/12.10.2023/WhatsApp Image 2023-10-12 at 13.07.17 (1).jpeg'
import img37 from '.././assets/foto_gallery/12.10.2023/WhatsApp Image 2023-10-12 at 13.07.17.jpeg'
import img38 from '.././assets/foto_gallery/12.10.2023/WhatsApp Image 2023-10-12 at 13.07.18 (1).jpeg'
import img39 from '.././assets/foto_gallery/12.10.2023/WhatsApp Image 2023-10-12 at 13.07.18.jpeg'
import img40 from '.././assets/foto_gallery/12.10.2023/WhatsApp Image 2023-10-12 at 13.07.19.jpeg'
import img41 from '.././assets/foto_gallery/12.10.2023/WhatsApp Image 2023-10-12 at 13.07.20 (1).jpeg'
import img42 from '.././assets/foto_gallery/12.10.2023/WhatsApp Image 2023-10-12 at 13.07.20 (2).jpeg'
import img43 from '.././assets/foto_gallery/12.10.2023/WhatsApp Image 2023-10-12 at 13.07.20.jpeg'
import img44 from '.././assets/foto_gallery/12.10.2023/WhatsApp Image 2023-10-12 at 13.07.21 (1).jpeg'
import img45 from '.././assets/foto_gallery/12.10.2023/WhatsApp Image 2023-10-12 at 13.07.21.jpeg'
import img46 from '.././assets/foto_gallery/12.10.2023/WhatsApp Image 2023-10-12 at 13.07.22 (1).jpeg'
import img47 from '.././assets/foto_gallery/12.10.2023/WhatsApp Image 2023-10-12 at 13.07.22 (2).jpeg'
import img48 from '.././assets/foto_gallery/12.10.2023/WhatsApp Image 2023-10-12 at 13.07.22.jpeg'
import img49 from '.././assets/foto_gallery/12.10.2023/WhatsApp Image 2023-10-12 at 13.07.23 (1).jpeg'
import img50 from '.././assets/foto_gallery/12.10.2023/WhatsApp Image 2023-10-12 at 13.07.23.jpeg'

const CardGallery = (props) => {

   const [loadedImages, setLoadedImages] = useState({});

   const handleImageLoad = (src) => {
      setLoadedImages({ ...loadedImages, [src]: true });
   };

   const img_col1 = [img26, img27, img28, img29, img30, img1, img2, img3, img4, img5, img7, img13, img12];
   const img_col2 = [img31, img32, img33, img34, img35, img50, img8, img9, img10, img11];
   const img_col3 = [img36, img37, img38, img39, img40, img48, img49, img15, img16, img17, img18, img19, img20];
   const img_col4 = [img41, img42, img43, img44, img45, img46, img47,img21, img22, img23, img24, img25, img14];


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