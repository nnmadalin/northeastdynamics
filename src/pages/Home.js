import '../styles/Home.css';

function Home() {
  return (
    <>
      <div className='front'>
        <video src='./assets/video/Robot Reveal _ 2021.mp4'  loop muted autoPlay/>
        <div className='fade' />
        <div className='contain'>
          <p>
            RO123
          </p>
          <h1>
            North<span>East</span> 
            <br />
            <span className='remove_space'>Dynamics</span>
          </h1>
          <p>
          Regina Maria High School
          <br />
          Dorohoi - Botosani - Romania
          </p>
        </div>
      </div>
      <div className='about'>
        <div className='left'>
          <h1>About Our Team</h1>
          <h3>North East Dynamics</h3>
          <br /> <br />
          <p>We started on this path since 2018. Every year we evolve and see that "Sky is not the limit". We make robots, but it's not enough. We want to make history! Season 8 brings us new challenges, but we're ready to give it our best shot and capitalize on Gracious Professionalism. Gracious team, Gracious work, Gracious minds. The Centerstage Challenge has arrived at our door - we're ready to give it our best (again). Welcome to our website! This is us.</p>
        </div>
        <div className='right'>
          <img src='./assets/images/NED.jpg' />
        </div>
      </div>
      <div className='results'>
        <h1>The most important results</h1>
        <div className='card'>
          <div className='left'>
            <img />
          </div>
          <div className='right'>
            <h1>LOC</h1>
            <h3>Paragraf</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
