
import './App.scss';
import About from './components/About';
import Contact from './components/Contact';

import Introduction from './components/Introduction';
import ProjectList from './components/ProjectList';


function App() {
  return (
    <div>
      <Introduction/>
      <About/>
      <ProjectList/>
      <Contact/>
    </div>
  );
}

export default App;
