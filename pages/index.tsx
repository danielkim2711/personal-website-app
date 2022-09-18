import type { NextPage } from 'next';
import Head from 'next/head';

import Header from '../components/Header';
import Hero from '../components/Hero';

const Home: NextPage = () => {
  return (
    <div className='bg-[#242424] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Daniel Kim | Front End Engineer</title>
      </Head>

      <Header />

      <section id='hero' className='snap-center'>
        <Hero />
      </section>
    </div>
  );
};

export default Home;
