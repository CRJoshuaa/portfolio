
import { useContext } from 'react';
import './App.scss';
import About from './components/About';
import Contact from './components/Contact';

import Introduction from './components/Introduction';
import ProjectList from './components/ProjectList';
import Toggle from './components/Toggle';
import { ThemeContext } from './context/ThemeContext';


function App() {
  const theme = useContext(ThemeContext)
  const darkMode=theme.state.darkMode
  
  return (
    <div 
    
      className={darkMode ?"dark-mode":undefined}
    >
      <Toggle/>
      <Introduction/>
      <About/>
      <ProjectList/>
      <Contact/>
    </div>
  );
}

export default App;
