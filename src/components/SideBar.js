import React, { useEffect, useState } from 'react'
import Link from "./Link";
import {FaShopware} from "react-icons/fa";
import {BsCartCheckFill} from "react-icons/bs";
import { nanoid } from '@reduxjs/toolkit';
import { useContext } from 'react';
import NavigationContext from '../context/Navigation';
import axios from 'axios';

const SideBar = () => {

const[cart,SetCart]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3005/users").then((resp)=>{SetCart(resp.data)})
    },[])

const {Cart}=useContext(NavigationContext);

    const links=[
        {name:<FaShopware size="40"/>,path:"/"},
        {name:"Home",path:"/Home"},
        // {name:"Login",path:"/Login"},
        // {name:"Support",path:"/Support"},
        {name:
            <div className='carticon'>
                <BsCartCheckFill size="40" className='icon' color="grey"/>
                <p className='number'>
                    {Cart.length}
                </p>
            </div>
        ,path:"/Cart"},
        // {name:"Logout",path:"/Logout"},
    ];

    const rendered=links.map((item)=>{
        return <Link to={item.path} key={nanoid()}>{item.name}</Link>
    })
return (
    <div className='sidebarlinks'>{rendered}</div>
)
}

export default SideBar;
