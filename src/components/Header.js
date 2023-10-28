import React, { useEffect } from 'react'
import {useState} from "react";
import {AiOutlineDoubleLeft,AiOutlineDoubleRight} from "react-icons/ai";
import logo0 from "../pics/0.jpg";
import logo1 from "../pics/1.avif";
import logo2 from "../pics/2.jpg";
import logo3 from "../pics/3.jpg";
import logo4 from "../pics/4.webp";
import logo5 from "../pics/5.jpg";
import logo6 from "../pics/6.webp";
import logo7 from "../pics/7.jpg";
import logo8 from "../pics/8.webp";

const Header = () => {
    const images=[logo0,logo1,logo2,logo3,logo4,logo5,logo6,logo7,logo8];
    const[Id,setId]=useState(0);
    const handleLeft=()=>{
        if(Id===0){
            setId(8);
        }
        else{
        setId(Id-1);
        }
    }
    const handleRight=()=>{
        if(Id===8){
            setId(0);
        }
        else{
        setId(Id+1);
        }
    
    }

    useEffect(()=>{

    },[])
return (
    <div className='header'>
        <AiOutlineDoubleLeft size="80" onClick={handleLeft} className='btn'/>
        <div>
            <img alt="books" src={images[Id]}/>
        </div>
        <AiOutlineDoubleRight size="80" onClick={handleRight} className='btn'/>
    </div>
)
}

export default Header;
