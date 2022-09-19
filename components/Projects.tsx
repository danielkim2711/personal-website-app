import { motion } from 'framer-motion';

import Project from './Project';

type Props = {};

const Projects = (props: Props) => {
  return (
    <section id='projects' className='snap-start'>
      <motion.div
        initial={{
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        className='relative min-h-[900px] flex justify-center items-center text-center lg:min-h-[1000px]'
      >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
          Projects
        </h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
          <Project
            demoUrl='https://danielpersonalblog.herokuapp.com'
            src='/static/project-one.png'
            alt='project one'
            title='Blog App'
            description='Full stack blog application built with the MERN stack + TypeScript'
          />
          <Project
            demoUrl='https://dog-meetup-app-frontend.vercel.app'
            src='/static/project-two.png'
            alt='project two'
            title='Dog Meetup App'
            description='Dog meetup application built with React.js and Django REST framework'
          />
          <Project
            demoUrl='https://react-weather-app-danielkim2711.vercel.app'
            src='/static/project-three.png'
            alt='project three'
            title='Weather App'
            description='Weather application built with React.js'
          />
          <Project
            demoUrl='https://danielkim2711.github.io/canvas-game'
            src='/static/project-four.png'
            alt='project four'
            title='Canvas Game'
            description='Canvas game built with plain HTML, CSS and JavaScript'
          />
          <Project
            demoUrl='https://danielkim2711.github.io/simple-calculator'
            src='/static/project-five.png'
            alt='project five'
            title='Simple Calculator'
            description='Simple calculator built with plain HTML, CSS and JavaScript'
          />
          <Project
            demoUrl='https://danielkim2711.github.io/etch-a-sketch'
            src='/static/project-six.png'
            alt='project six'
            title='Etch-a-Sketch'
            description='Etch-a-Sketch built with plain HTML, CSS and JavaScript'
          />
        </div>

        <div className='w-full absolute top-[25%] left-0 bg-[#F7AB0A]/10 h-[500px] -skew-y-12' />
      </motion.div>
    </section>
  );
};

export default Projects;
