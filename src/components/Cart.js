import React, { useEffect} from 'react'
import {useContext} from "react";
import NavigationContext from "../context/Navigation";
import { FcLike } from 'react-icons/fc';
import { BsCurrencyDollar } from 'react-icons/bs';
import {FaTrash} from "react-icons/fa";
import axios from "axios";

const Cart = () => {
    const {Cart,setCart,deleteCart,reset} =useContext(NavigationContext);
    useEffect(()=>{
        axios.get("http://localhost:3005/users").then((d)=>setCart(d.data))
    },[setCart])

    console.log(Cart)
    const rendered=Cart.map(({name})=>{
        console.log(name)
        return <div key={name.id} className='box'>
        <img src={name.url} alt=""></img>
        <h2><FcLike/> {name.likes}</h2>
        <p>Cost - <BsCurrencyDollar color="green"/>{name.width}</p>
        <FaTrash size="30" onClick={()=>deleteCart({name})}/>
    </div>
    })

    let cost=0;
    for(const i of Cart){
        cost+=i.name.width;
    }
    const handleReset=()=>{
        reset();
    }

    return(
        <>
        <div className='cart'>
            {rendered}
        </div>
        {cost?<h2>Total Cost - <BsCurrencyDollar/>{cost}</h2>:<h1>Looks Quiet !!</h1>}
            {<FaTrash size="40" onClick={handleReset}/>}
        </>
    )
}

export default Cart;
