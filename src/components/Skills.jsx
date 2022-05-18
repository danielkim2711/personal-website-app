import { useState } from 'react';

import { BiCodeCurly } from 'react-icons/bi';
import { FaAngleDown } from 'react-icons/fa';
import { FiServer } from 'react-icons/fi';

const Skills = ({ skillsRef }) => {
  const [showFrontendSkills, setShowFrontendSkills] = useState(true);
  const [showBackendSkills, setShowBackendSkills] = useState(true);

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
          <div id='skills__content' className='mb-6'>
            <div
              className='flex items-center mb-6 cursor-pointer'
              id='skills__header'
              onClick={() => setShowFrontendSkills(!showFrontendSkills)}
            >
              <BiCodeCurly
                className='text-[2rem] text-primary-color mr-3'
                id='skills__icon'
              />

              <div>
                <h1 className='text-xl font-semibold' id='skills__title'>
                  Front End Development
                </h1>
                <span className='text-sm text-[#999]' id='skills__subtitle'>
                  3 years of degree experience
                </span>
              </div>

              <FaAngleDown
                className={`skills__arrow ${
                  showFrontendSkills === true && '-rotate-180'
                }  ml-auto text-2xl text-primary-color`}
              />
            </div>

            <div
              className={
                showFrontendSkills === true
                  ? 'grid gap-6 pl-11 h-max mb-10'
                  : 'h-0 overflow-hidden'
              }
              id='skills__list'
            >
              <div id='skills__data'>
                <div className='mb-2 text-lg' id='skills__title'>
                  <h3 className='font-medium' id='skills__name'>
                    HTML5
                  </h3>
                </div>
                <span
                  className='block h-[5px] rounded bg-primary-color w-full'
                  id='skills__percentage skills__html'
                ></span>
              </div>

              <div id='skills__data'>
                <div className='mb-2 text-lg' id='skills__title'>
                  <h3 className='font-medium' id='skills__name'>
                    CSS3
                  </h3>
                </div>
                <span
                  className='block h-[5px] rounded bg-primary-color w-full'
                  id='skills__percentage skills__html'
                ></span>
              </div>

              <div id='skills__data'>
                <div className='mb-2 text-lg' id='skills__title'>
                  <h3 className='font-medium' id='skills__name'>
                    JavaScript
                  </h3>
                </div>
                <span
                  className='block h-[5px] rounded bg-primary-color w-full'
                  id='skills__percentage skills__html'
                ></span>
              </div>

              <div id='skills__data'>
                <div className='mb-2 text-lg' id='skills__title'>
                  <h3 className='font-medium' id='skills__name'>
                    TypeScript
                  </h3>
                </div>
                <span
                  className='block h-[5px] rounded bg-primary-color w-full'
                  id='skills__percentage skills__html'
                ></span>
              </div>

              <div id='skills__data'>
                <div className='mb-2 text-lg' id='skills__title'>
                  <h3 className='font-medium' id='skills__name'>
                    React.js
                  </h3>
                </div>
                <span
                  className='block h-[5px] rounded bg-primary-color w-full'
                  id='skills__percentage skills__html'
                ></span>
              </div>

              <div id='skills__data'>
                <div className='mb-2 text-lg' id='skills__title'>
                  <h3 className='font-medium' id='skills__name'>
                    Redux.js
                  </h3>
                </div>
                <span
                  className='block h-[5px] rounded bg-primary-color w-full'
                  id='skills__percentage skills__html'
                ></span>
              </div>
            </div>
          </div>

          <div id='skills__content' className='mb-6'>
            <div
              className='flex items-center mb-6 cursor-pointer'
              id='skills__header'
              onClick={() => setShowBackendSkills(!showBackendSkills)}
            >
              <FiServer
                className='text-[2rem] text-primary-color mr-3'
                id='skills__icon'
              />

              <div>
                <h1 className='text-xl font-semibold' id='skills__title'>
                  Back End Development
                </h1>
                <span className='text-sm text-[#999]' id='skills__subtitle'>
                  3 years of degree experience
                </span>
              </div>

              <FaAngleDown
                className={`skills__arrow ${
                  showBackendSkills === true && '-rotate-180'
                }  ml-auto text-2xl text-primary-color`}
              />
            </div>

            <div
              className={
                showBackendSkills === true
                  ? 'grid gap-6 pl-11 h-max mb-10'
                  : 'h-0 overflow-hidden'
              }
              id='skills__list'
            >
              <div id='skills__data'>
                <div className='mb-2 text-lg' id='skills__title'>
                  <h3 className='font-medium' id='skills__name'>
                    Node.js
                  </h3>
                </div>
                <span
                  className='block h-[5px] rounded bg-primary-color w-full'
                  id='skills__percentage skills__html'
                ></span>
              </div>

              <div id='skills__data'>
                <div className='mb-2 text-lg' id='skills__title'>
                  <h3 className='font-medium' id='skills__name'>
                    Express.js
                  </h3>
                </div>
                <span
                  className='block h-[5px] rounded bg-primary-color w-full'
                  id='skills__percentage skills__html'
                ></span>
              </div>

              <div id='skills__data'>
                <div className='mb-2 text-lg' id='skills__title'>
                  <h3 className='font-medium' id='skills__name'>
                    Python
                  </h3>
                </div>
                <span
                  className='block h-[5px] rounded bg-primary-color w-full'
                  id='skills__percentage skills__html'
                ></span>
              </div>

              <div id='skills__data'>
                <div className='mb-2 text-lg' id='skills__title'>
                  <h3 className='font-medium' id='skills__name'>
                    Django
                  </h3>
                </div>
                <span
                  className='block h-[5px] rounded bg-primary-color w-full'
                  id='skills__percentage skills__html'
                ></span>
              </div>

              <div id='skills__data'>
                <div className='mb-2 text-lg' id='skills__title'>
                  <h3 className='font-medium' id='skills__name'>
                    MongoDB
                  </h3>
                </div>
                <span
                  className='block h-[5px] rounded bg-primary-color w-full'
                  id='skills__percentage skills__html'
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
