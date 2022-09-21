import { motion } from 'framer-motion';

import Project from './Project';

import projectsData from '../projectsData';

type Props = {};

const Projects = (props: Props) => {
  return (
    <section id='projects' className='snap-center'>
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

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-10 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
          {projectsData.map((projectData, index) => (
            <Project
              key={index}
              demoUrl={projectData.demoUrl}
              src={projectData.src}
              alt={projectData.alt}
              title={projectData.title}
              icons={projectData.icons}
              description={projectData.description}
            />
          ))}
        </div>

        <div className='w-full absolute top-[25%] left-0 bg-[#F7AB0A]/10 h-[500px] -skew-y-12' />
      </motion.div>
    </section>
  );
};

export default Projects;
