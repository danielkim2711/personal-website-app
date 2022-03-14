import { useRef } from 'react';

import Navbar from './layout/Navbar';
import Home from './layout/Home';
import About from './layout/About';

const Header = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);

  const executeScroll = (ref) => {
    if (ref === 'Home') {
      homeRef.current.scrollIntoView();
    }

    if (ref === 'About') {
      aboutRef.current.scrollIntoView();
    }
  };

  return (
    <>
      <Navbar executeScroll={executeScroll} />
      <Home homeRef={homeRef} />
      <About aboutRef={aboutRef} />
    </>
  );
};

export default Header;
