import { SiLinkedin, SiGithub } from 'react-icons/si';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import { BsMouse } from 'react-icons/bs';
import { AiOutlineArrowDown } from 'react-icons/ai';

import profileImage from './assets/img/profile_white.png';

const Home = () => {
  return (
    <main className='main'>
      <section className='pt-8 px-0 pb-16' id='home'>
        <div className='max-w-[768px] mx-6 grid gap-6' id='home__container'>
          <div
            className='grid grid-cols-[0.5fr,3fr] gap-6 pt-14 items-center'
            id='home__content'
          >
            <div
              className='grid grid-cols-[max-content] gap-y-6'
              id='home__social'
            >
              <a
                href='https://www.linkedin.com/in/daniel-kim-674aa413b/'
                target='_blank'
                rel='noreferrer'
                className='text-xl text-primary-color hover:text-secondary-color'
                id='home__social-icon'
              >
                <SiLinkedin />
              </a>
              <a
                href='https://github.com/danielkim2711'
                target='_blank'
                rel='noreferrer'
                className='text-xl text-primary-color hover:text-secondary-color'
                id='home__social-icon'
              >
                <SiGithub />
              </a>
            </div>

            <div id='home__img'>
              <img
                src={profileImage}
                alt='Daniel Kim'
                className='rounded-[50%] w-[200px] h-[200px] shadow-md'
              />
            </div>

            <div className='col-[1/3]' id='home__data'>
              <h1 className='text-3xl font-bold' id='home__title'>
                Kia ora, I'm Daniel
              </h1>
              <h3
                className='text-lg text-[#6d6a7c] font-medium mb-3'
                id='home__subtitle'
              >
                Front End Developer
              </h3>
              <p className='mb-8 text-secondary-color' id='home__description'>
                Passinate about becoming a Front End Developer
              </p>
              <a
                href='#contact'
                className='inline-flex bg-slate-500 hover:bg-slate-600 text-white p-4 rounded-lg font-medium'
                id='button'
              >
                Contact Me
                <IoPaperPlaneOutline
                  className='text-xl ml-1'
                  id='button__icon'
                />
              </a>
            </div>
          </div>

          <div className='home__scroll'>
            <a
              href='#about'
              className='home__scroll-button flex items-end'
              id='home__scroll-button'
            >
              <BsMouse className='text-3xl' id='home__scroll-mouse' />
              <span className='font-medium mx-2 text-sm' id='home__scroll-name'>
                Scroll down
              </span>
              <AiOutlineArrowDown className='mb-1' id='home__scroll-arrow' />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
