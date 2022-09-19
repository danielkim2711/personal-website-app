import type { NextPage } from 'next';
import Head from 'next/head';

import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';

const Home: NextPage = () => {
  return (
    <div className='bg-[#242424] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 scroll-smooth'>
      <Head>
        <title>Daniel Kim | Front End Engineer</title>
      </Head>

      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
    </div>
  );
};

export default Home;
