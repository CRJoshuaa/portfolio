import React, { useContext } from 'react'
import "./index.scss"
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ThemeContext } from '../../context/ThemeContext';

const Toggle = () => {

    const theme = useContext(ThemeContext)
    const darkMode=theme.state.darkMode

    const handleToggle=()=>{
        theme.dispatch({type:"TOGGLE"})
    }

    return (
    <div className={`toggle ${darkMode ? "dark-mode":undefined}`}>
        <LightModeIcon className='toggle-icon'/>
        <DarkModeIcon className='toggle-icon'/>
        <div className="toggle-button" 
            onClick={handleToggle}
            style={{left:darkMode?"0%":"50%"}}
        ></div>
    </div>
    )
}

export default Toggle