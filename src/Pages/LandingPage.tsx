import React, { useState, useEffect } from 'react';
import "../App.css";
import music from "../Assets/music1.mp3";
import { Link, useNavigate } from 'react-router-dom';
import "./LandingPage.css"


const Homepage = () => {

    const [block, setBlock] = useState(false);
    const [next, setNext] = useState(false);
    const navigate=useNavigate();
  
const handleEnter=()=>{
    setBlock(true);
    setNext(true)

}
const handleNext=()=>{
    navigate("/login")
}
 const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(new Audio(music));
  
  useEffect(() => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying]);
  
  const handleButtonClick = () => {
    setIsPlaying(!isPlaying);
  };

    
  return (
    <div className='bg' style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://zty.pe/media/background/page.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh'
      }}>
    
    <div className="home">
    
        <div className='home-container'>
        <button style={{"float":"left"}} onClick={handleButtonClick}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
           <h3 className='text-6xl mt-0 font-black' >FireByMisFire</h3>
           
           <center className='under_home'>
            <button className='glow-on-hover'>
            <Link className='under_home' to={"/Auth"} 
            >
           New game
           </Link>
           </button>

           {/* <button className="glow-on-hover" type="button">New game</button> */}
           {/* <Link className='under_home' to={"/setting"}>
           <p className='text-2xl mt-3'>setting</p>
           </Link>
           <Link className='under_home' to={"/leaderbord"}>
           <p className='text-2xl mt-3'>my stats</p>
           </Link> */}
           <br/>
           {/* <p className='text-2xl'>Happp Ending</p> */}
           
           </center>
          
        </div>
    </div>
    </div>
   

  )
}

export default Homepage