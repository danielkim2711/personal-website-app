import { FaGraduationCap } from 'react-icons/fa';
import { BsFillBriefcaseFill } from 'react-icons/bs';

const Qualification = () => {
  return (
    <section className='px-0 pt-8 pb-16 text-center' id='qualification section'>
      <h2 className='text-2xl font-bold' id='section__title'>
        Qualification
      </h2>
      <span className='block text-sm text-[#999]' id='section__subtitle'>
        My personal journey
      </span>

      <div id='qualification__container container'>
        <div
          className='flex justify-center items-center mt-20'
          id='qualification__tabs'
        >
          <div
            className='flex items-center mx-6'
            id='qualification__button button--flex'
          >
            <FaGraduationCap className='w-7 h-7 mr-2' />
            <p className='text-xl'>Education</p>
          </div>

          <div
            className='flex items-center mx-6'
            id='qualification__button button--flex'
          >
            <BsFillBriefcaseFill className='w-5 h-5 mr-2' />
            <p className='text-xl'>Work</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
