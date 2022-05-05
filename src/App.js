import { useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/layouts/Navbar';
import Home from './components/layouts/Home';
import About from './components/layouts/About';
import Skills from './components/layouts/Skills';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);

  const executeScroll = (ref) => {
    if (ref === 'Home') {
      homeRef.current.scrollIntoView();
    }

    if (ref === 'About') {
      aboutRef.current.scrollIntoView();
    }

    if (ref === 'Skills') {
      skillsRef.current.scrollIntoView();
    }
  };

  return (
    <Router>
      <Navbar executeScroll={executeScroll} />
      <Home homeRef={homeRef} />
      <About aboutRef={aboutRef} />
      <Skills skillsRef={skillsRef} />
    </Router>
  );
}

export default App;
