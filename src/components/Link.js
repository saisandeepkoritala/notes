import NavigationContext from "../context/Navigation";
import { useContext } from "react";
const Link = ({to,children}) => {

    const {navigate}=useContext(NavigationContext);

    const handleClick=(e)=>{
        e.preventDefault();
        navigate(to);
    }
    return (
        <a href={to} alt="going to link" onClick={handleClick}>{children}</a>
    )
}

export default Link