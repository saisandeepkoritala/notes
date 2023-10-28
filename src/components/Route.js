import { useContext } from 'react';
import NavigationContext from '../context/Navigation';

const Route = ({path,children}) => {
    
    const {currentpath}=useContext(NavigationContext);
    
    if(currentpath===path){
        return children;
    }
    else{
        return null;
    }
}

export default Route;
