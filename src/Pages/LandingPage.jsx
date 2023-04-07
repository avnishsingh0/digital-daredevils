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
        {/* <div className='home-container'> */}
            {/* <div className='logo'>
                <img src="https://res.cloudinary.com/djo88dwrg/image/upload/v1677915063/Screenshot_2023-03-04_at_12.58.01_PM-removebg-preview_jnptsr.png" alt="img"/>
               aaaa
                <center>
                <button className='btn-1' onClick={handleNext} >New game</button>
                
                </center>
            </div> */}
        {/* </div> */}
    </div>
    </div>
  )
}

export default Homepage