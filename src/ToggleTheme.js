import React, { useState, useContext } from 'react';    
import sun from './assets/sun.svg';
import moon from './assets/moon.svg';
import { ThemeContext } from './contexts/ThemeContext';
import { Link } from "react-router-dom";

const ToggleTheme = () => {
    const { toggleTheme } = useContext(ThemeContext);
    const [icon, setIcon] = useState(true);

    const iconChange = () => {
        let newIcon = !icon;
        setIcon(newIcon);
    }
    const onClick =  event => {
        iconChange()
        toggleTheme()
     }

    return (
        <div className="toggle__box">
            <span>
            {icon ? (
                
                <Link  onClick={onClick}><img alt="" src={moon} className="moon-icon" width="100px"/></Link>
                
            ) : (
                
                <Link  onClick={onClick}><img alt="" src={sun} className="sun-icon" width="100px"/></Link>
                
            )}
            </span>
         </div>
    )
}

export default ToggleTheme;