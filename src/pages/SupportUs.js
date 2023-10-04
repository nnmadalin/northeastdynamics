import '../styles/SupportUs.css';
import '../styles/static.css';

import national_championship_2023 from '.././assets/images/national_championship-2023.JPG'
import national_championship_2021 from '.././assets/images/national_championship-2021.jpg'
import regional_2023 from '.././assets/images/regional-2023.jpg'

function Home() {
   return (
      <main className='page'>
         <div className='title'>
            <h1>Be our sponsor</h1>
            <h2>North <b>East Dynamics</b></h2>
         </div>
         <div className='content'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat placerat erat, sed fringilla sem facilisis nec. Aliquam sapien neque, bibendum molestie nulla vel, varius varius nibh. In porta, dui nec dapibus semper, augue nunc mattis libero, vel euismod sem metus ac ex. Maecenas quam tellus, tristique sed lacinia laoreet, placerat in leo. Phasellus porttitor, risus eget gravida tristique, nisl leo pellentesque lorem, non aliquam enim lectus et purus. Ut eget nisi in ex condimentum tincidunt nec eu metus. Cras nec fringilla ante. Duis purus mi, mattis vitae odio rutrum, tempor commodo metus. Sed convallis varius ligula, id porttitor nibh auctor ac. Donec vel metus neque. Aliquam ex risus, efficitur non lacus suscipit, suscipit egestas felis. Phasellus tempus congue nulla, facilisis pharetra lectus malesuada nec. Nam molestie vitae nunc nec tincidunt. Phasellus tempor lacus nec felis ultricies, in fermentum libero vehicula.
            <br /><br />
            Suspendisse potenti. Proin sit amet lorem tortor. Aliquam quis tristique ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque dictum elementum ex, non sodales nibh commodo vitae. Nulla sollicitudin libero nisl, vitae semper nisl dictum sed. Suspendisse quis nibh nec lectus sodales varius sed eget quam. Vivamus a gravida tellus, a feugiat purus. Vivamus non placerat purus. Mauris vulputate massa eget varius viverra. Aenean sem purus, luctus nec luctus eu, ullamcorper non nisl. Suspendisse mattis nisl id ultrices bibendum. Pellentesque vitae faucibus urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu erat gravida, vestibulum lacus et, pretium dui.
            <br /><br />

            <img className='img1' src={national_championship_2023} alt="img" />

            <br /><br />
            Donec metus lorem, convallis sit amet felis in, aliquam sodales arcu. Maecenas sagittis et mi a venenatis. Nunc tristique pharetra mauris, eget congue lectus. Suspendisse suscipit sem non augue semper porttitor. Nullam nec mi elementum, fringilla lorem eu, convallis enim. Curabitur efficitur nunc ut mollis porta. Suspendisse mauris mauris, maximus ut neque suscipit, blandit commodo urna. Aenean laoreet nibh mauris, ac hendrerit tortor faucibus quis. In volutpat est tellus, vitae tristique mauris ornare eget. Etiam sit amet massa vestibulum, cursus justo sit amet, posuere ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus eleifend nibh nunc, sed laoreet metus tempor vitae. Vestibulum a dictum felis.
            <br /><br />

            <div className='images'>
               <img src={national_championship_2021} alt="img" />
               <img src={regional_2023} alt="img" />
            </div>

            <br /><br />
            In tristique pretium tempor. Aliquam diam mi, facilisis ac mattis eget, scelerisque in tellus. Aenean eget urna eget lectus scelerisque maximus vel eget diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nunc nunc. Praesent fermentum nisl sit amet dui porta sodales. Etiam eu ipsum leo. Phasellus pharetra et nulla eget pretium. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc scelerisque ultrices sem nec finibus. Donec a mauris in justo consectetur porta sit amet at mi.
            <br /><br />
            Donec tristique nulla eget arcu porta egestas. Phasellus gravida eleifend ante, vitae condimentum quam lacinia vitae. Mauris hendrerit vestibulum augue, ac ullamcorper leo interdum id. Cras fringilla id augue sed lacinia. Nam sem leo, placerat vitae turpis at, posuere feugiat metus. Sed eget tellus enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse luctus iaculis urna eu ullamcorper. Sed lacinia lacus eu pulvinar vulputate. Duis ultricies dui magna, id sollicitudin neque laoreet et. Nam eu egestas augue, eu congue nisl. In leo mauris, auctor quis malesuada sit amet, finibus non erat. Vivamus varius ante ac massa tincidunt facilisis. Quisque interdum justo in tincidunt vestibulum. Cras feugiat elementum vestibulum. Donec luctus, tortor sit amet consequat suscipit, nibh orci finibus augue, ac scelerisque leo tellus nec metus.
         </div>
      </main>
   );
}

export default Home;
