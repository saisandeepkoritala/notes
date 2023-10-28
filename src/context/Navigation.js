import React from 'react';
import { createContext } from 'react';
import { useState,useEffect } from 'react';
import axios from "axios";

const NavigationContext=createContext();

const Navigation = ({children}) => {

    const[currentpath,setcurrentpath]=useState(window.location.pathname);
    const[Cart,setCart]=useState([]);

    useEffect(()=>{
        const handler=()=>{
            setcurrentpath(window.location.pathname)
            console.log("back to ",window.location.pathname)
        }
        window.addEventListener("popstate",handler);

        return ()=>{
            window.removeEventListener("popstate",handler);
        }
    },[])

    const navigate=(to)=>{
        window.history.pushState({},"",to);
        setcurrentpath(window.location.pathname);
    }

    const addCart=async(item)=>{

            axios.get("http://localhost:3005/users").then((d) => {
            const tempData = d.data;
            
            const isDuplicate = tempData.some((cartItem) => {
                return cartItem.name.id === item.id
            });
        
            if (isDuplicate) {
                console.log("Duplicate found");
                return; 
            }

            else{
            axios.post("http://localhost:3005/users", {
                name: item
            }).then((res) => {
                let temp = [...Cart, res.data];
                setCart(temp);
            });  
            }
        });
    }    
    const deleteCart=(item)=>{
        let del;
        let temp=Cart.filter(({id,name})=>{
            if(name.id===item.name.id){
                del=id;
            }
            return name.id!==item.name.id
        }
            )
        setCart(temp);
        axios.delete(`http://localhost:3005/users/${del}`);
    }

    const reset = async () => {
    try {
        const response = await axios.get('http://localhost:3005/users');
        const users = response.data;

        for (const user of users) {
        await axios.delete(`http://localhost:3005/users/${user.id}`);
        }
        setCart([]);
        } catch (error) {
        console.error('Error deleting users:', error);
        }
    };


    const valueToShare={
        currentpath:currentpath,
        navigate:navigate,
        addCart:addCart,
        deleteCart:deleteCart,
        Cart:Cart,
        setCart:setCart,
        reset:reset
    }

return (
    <NavigationContext.Provider value={valueToShare}>
        {children}
    </NavigationContext.Provider>
)
}

export {Navigation};
export default NavigationContext;