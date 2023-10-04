import React from 'react';
import Lightbox  from "react-modal-image";


import img1 from '.././assets/foto_gallery/9a3393c0-5fbc-4713-999a-847284b54be1.JPG'
import img2 from '.././assets/foto_gallery/43b087f6-ee0a-4fe2-a7c4-9ccd6038066b.JPG'
import img3 from '.././assets/foto_gallery/49fa9220-2766-49b6-af26-e8bd52f54775.JPG'
import img4 from '.././assets/foto_gallery/909ed3d8-00ac-4b3c-bf83-30fc15419d9e.JPG'
import img5 from '.././assets/foto_gallery/9416E384-378F-4D95-ADEF-A235257B40DF.JPG'
import img6 from '.././assets/foto_gallery/a956b806-6d00-49b5-b821-e553d781f714.JPG'
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

   return (
      <>
         <div class="column">
            <Lightbox classname="image"  small={img1} large={img1}  />
            <Lightbox classname="image"  small={img2} large={img2}  />
            <Lightbox classname="image"  small={img3} large={img3}  />
            <Lightbox classname="image"  small={img4} large={img4}  />
            <Lightbox classname="image"  small={img5} large={img5}  />
            <Lightbox classname="image"  small={img6} large={img6}  />
            <Lightbox classname="image"  small={img7} large={img7}  />
         </div>

         <div class="column">
            <Lightbox classname="image"  small={img8} large={img8}  />
            <Lightbox classname="image"  small={img9} large={img9}  />
            <Lightbox classname="image"  small={img10} large={img10}  />
            <Lightbox classname="image"  small={img11} large={img11}  />
            <Lightbox classname="image"  small={img12} large={img12}  />
         </div>

         <div class="column">
            <Lightbox classname="image"  small={img15} large={img15}  />
            <Lightbox classname="image"  small={img16} large={img16}  />
            <Lightbox classname="image"  small={img17} large={img17}  />
            <Lightbox classname="image"  small={img18} large={img18}  />
            <Lightbox classname="image"  small={img19} large={img19}  />
            <Lightbox classname="image"  small={img20} large={img20}  />
         </div>

         <div class="column">
            <Lightbox classname="image"  small={img21} large={img21}  />
            <Lightbox classname="image"  small={img22} large={img22}  />
            <Lightbox classname="image"  small={img23} large={img23}  />
            <Lightbox classname="image"  small={img24} large={img24}  />
            <Lightbox classname="image"  small={img25} large={img25}  />
            <Lightbox classname="image"  small={img14} large={img14}  />
            <Lightbox classname="image"  small={img13} large={img13}  />
         </div>

      </>
   );
};

export default CardGallery;