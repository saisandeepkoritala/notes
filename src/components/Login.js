import React, { useEffect } from 'react'
import axios from "axios";

const Login = () => {

    const[name,setname]=React.useState("");
    const[pass,setpass]=React.useState("");
    const[newcontent,setnewcontent]=React.useState(false);
    const[newuser,setnewuser]=React.useState(false);

    useEffect(()=>{
        setnewuser(false);
        setname("");
        setpass("");
    },[])
    const handleuserchange=(e)=>{
        setname(e.target.value);
    }
    const handlepasswordchange=(e)=>{
        setpass(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.get("http://localhost:3005/login").then((response) => {
    const serverData = response.data;
    const userCredentials = {
    name: name,
    pass: pass
    };

    let isValid = false;
    for (const userData of serverData) {
        if (userData.name === userCredentials.name && userData.pass === userCredentials.pass) {
            isValid = true;
            break; 
        }
    }
    if (isValid) {
        console.log("valid");
        setnewcontent(true);
    } else {
        console.log("Invalid");
    }
    setname("");
    setpass("");
})
.catch((error) => {
    console.error("Error fetching data:", error);
});

    }

    const handleAdd=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3005/login",{
            name,
            pass
        }).then(()=>{console.log("success")
    setname("");
    setpass("");    
    setnewuser(false)}).catch(()=>console.log("error"))
    }

    let content=<>
            <label>Username </label>
            <input value={name} onChange={handleuserchange} />
            <label>Password </label>
            <input value={pass} onChange={handlepasswordchange} type='password'/>
            <button onSubmit={handleSubmit}>Submit</button>
            <p>* if exisiting user</p>
    </>
    if(!newuser){
            return (
                <form className='login' onSubmit={handleSubmit}>
                    {newcontent?<div>Welcome back</div>:content}
                    <p onClick={()=>setnewuser(true)}>new user</p>
                </form>
            )
    }
    else{
        return(
            <form onSubmit={handleAdd}>
                <label>Username </label>
                <input value={name} onChange={handleuserchange} />
                <label>Password </label>
                <input value={pass} onChange={handlepasswordchange} type='password'/>
                <button>Submit</button>
            </form>)
    }


}

export default Login;
