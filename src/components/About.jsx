import aboutImage from './assets/images/daniel.jpeg';
import danielCV from './assets/daniel_cv.pdf';

import { BiDownload } from 'react-icons/bi';

const About = ({ aboutRef }) => {
  return (
    <section className='pt-8 px-0 pb-16' id='about' ref={aboutRef}>
      <h2 className='text-2xl text-center font-bold' id='section__title'>
        About Me
      </h2>
      <span
        className='block text-sm mb-12 text-center font-light text-[#6d6a7c]'
        id='section__subtitle'
      >
        My introduction
      </span>

      <div className='max-w-[768px] mx-6 grid gap-6' id='about__container'>
        <img
          src={aboutImage}
          alt='Daniel'
          className='w-[300px] rounded-lg justify-self-center self-center'
          id='about__img'
        />

        <div id='about__data'>
          <p className='text-center mb-10' id='about__description'>
            Front End Developer, <br /> Passinate about Web Development
          </p>

          <div className='flex justify-evenly mb-10' id='about__info'>
            <div>
              <span
                className='block text-center text-xl text-primary-color font-semibold'
                id='about__info-title'
              >
                BCS
              </span>
              <span
                className='block text-center text-xs text-[#6d6a7c]'
                id='about__info-name'
              >
                Degree <br /> at Unitec
              </span>
            </div>
            <div>
              <span
                className='block text-center text-xl text-primary-color font-semibold'
                id='about__info-title'
              >
                50+
              </span>
              <span
                className='block text-center text-xs text-[#6d6a7c]'
                id='about__info-name'
              >
                GitHub <br /> repositories
              </span>
            </div>
            <div>
              <span
                className='block text-center text-xl text-primary-color font-semibold'
                id='about__info-title'
              >
                4+
              </span>
              <span
                className='block text-center text-xs text-[#6d6a7c]'
                id='about__info-name'
              >
                Years of job <br /> experiences
              </span>
            </div>
          </div>

          <div className='flex justify-center' id='about__buttons'>
            <a
              href={danielCV}
              className='inline-flex items-center bg-slate-500 hover:bg-slate-600 text-white p-5 rounded-lg font-medium'
              id='button button--flex'
              download
            >
              Download CV
              <BiDownload className='text-xl ml-1' id='button__icon' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
