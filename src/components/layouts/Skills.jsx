import { useState } from 'react';

import { BiCodeCurly } from 'react-icons/bi';
import { FaAngleDown } from 'react-icons/fa';

const Skills = ({ skillsRef }) => {
  const [showSkills, setShowSkills] = useState(true);

  return (
    <section className='pt-8 px-0 pb-16' id='skills' ref={skillsRef}>
      <h2 className='text-2xl text-center font-bold' id='section__title'>
        Skills
      </h2>
      <span
        className='block text-sm mb-12 text-center font-light text-[#6d6a7c]'
        id='section__subtitle'
      >
        My technical level
      </span>

      <div
        className='max-w-[768px] mx-6 grid gap-6 gap-y-0'
        id='skills_container'
      >
        <div>
          <div id='skills__content'>
            <div
              className='flex items-center mb-6 cursor-pointer'
              id='skills__header'
              onClick={() => setShowSkills(!showSkills)}
            >
              <BiCodeCurly
                className='text-[2rem] text-primary-color mr-3'
                id='skills__icon'
              />

              <div>
                <h1 className='text-2xl font-semibold' id='skills__title'>
                  Front End Developer
                </h1>
                <span className='text-sm text-[#999]' id='skills__subtitle'>
                  3 years of degree experience
                </span>
              </div>

              <FaAngleDown
                className={`skills__arrow ${
                  showSkills === true && '-rotate-180'
                }  ml-auto text-2xl text-primary-color`}
              />
            </div>

            <div
              className={
                showSkills === true
                  ? 'grid gap-6 pl-11 h-max mb-10'
                  : 'h-0 overflow-hidden'
              }
              id='skills__list'
            >
              <div id='skills__data'>
                <div
                  className='flex justify-between mb-2 text-lg'
                  id='skills__title'
                >
                  <h3 className='font-medium' id='skills__name'>
                    HTML
                  </h3>
                  <span className='text-[#6d6a7c]' id='skills__number'>
                    90%
                  </span>
                </div>
                <div
                  className='h-[5px] rounded bg-secondary-color'
                  id='skills__bar'
                >
                  <span
                    className='block h-[5px] rounded bg-primary-color w-[90%]'
                    id='skills__percentage skills__html'
                  ></span>
                </div>
              </div>

              <div id='skills__data'>
                <div
                  className='flex justify-between mb-2 text-lg'
                  id='skills__title'
                >
                  <h3 className='font-medium' id='skills__name'>
                    CSS
                  </h3>
                  <span className='text-[#6d6a7c]' id='skills__number'>
                    80%
                  </span>
                </div>
                <div
                  className='h-[5px] rounded bg-secondary-color'
                  id='skills__bar'
                >
                  <span
                    className='block h-[5px] rounded bg-primary-color w-[80%]'
                    id='skills__percentage skills__css'
                  ></span>
                </div>
              </div>

              <div id='skills__data'>
                <div
                  className='flex justify-between mb-2 text-lg'
                  id='skills__title'
                >
                  <h3 className='font-medium' id='skills__name'>
                    JavaScript
                  </h3>
                  <span className='text-[#6d6a7c]' id='skills__number'>
                    80%
                  </span>
                </div>
                <div
                  className='h-[5px] rounded bg-secondary-color'
                  id='skills__bar'
                >
                  <span
                    className='block h-[5px] rounded bg-primary-color w-[80%]'
                    id='skills__percentage skills__js'
                  ></span>
                </div>
              </div>

              <div id='skills__data'>
                <div
                  className='flex justify-between mb-2 text-lg'
                  id='skills__title'
                >
                  <h3 className='font-medium' id='skills__name'>
                    React.js
                  </h3>
                  <span className='text-[#6d6a7c]' id='skills__number'>
                    85%
                  </span>
                </div>
                <div
                  className='h-[5px] rounded bg-secondary-color'
                  id='skills__bar'
                >
                  <span
                    className='block h-[5px] rounded bg-primary-color w-[85%]'
                    id='skills__percentage skills__react'
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
