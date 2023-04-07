import React, { useEffect, useState } from 'react'
import "../App.css";
// import music from "../assets/home-music.mp3";
import { useNavigate } from 'react-router-dom';

const Homepage = () => {

    const [block, setBlock] = useState(false);
    // const [div, setDiv] = useState(false);
    const [next, setNext] = useState(false);
    const navigate=useNavigate();
    // const [block, setBlock] = useState(false);

    // const audio = new Audio(music);
    // audio.play()
    

const handleEnter=()=>{
    setBlock(true);
    setNext(true)

}
const handleNext=()=>{
    navigate("/login")
}

    
  return (
    <div className='bg'>
    
    <div className="home">
    
        <div className='home-container'>
            <div className='logo'>
               
                <center>
                <h3></h3>
                
                </center>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Homepage