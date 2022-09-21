import { motion } from 'framer-motion';

import Skill from './Skill';

type Props = {};

const Skills = (props: Props) => {
  return (
    <section id='skills' className='snap-start'>
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
        className='relative min-h-[1300px] flex justify-center items-center text-center md:min-h-screen'
      >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
          Skills
        </h3>

        <div className='grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-7 lg:gap-5 lg:px-10 xl:gap-10 xl:px-0'>
          <Skill iconUrl='akar-icons:html-fill' text='HTML5' />
          <Skill iconUrl='akar-icons:css-fill' text='CSS3' />
          <Skill iconUrl='akar-icons:sass-fill' text='Sass' />
          <Skill iconUrl='akar-icons:javascript-fill' text='JavaScript' />
          <Skill iconUrl='cib:typescript' text='TypeScript' />
          <Skill iconUrl='akar-icons:react-fill' text='React.js' />
          <Skill iconUrl='akar-icons:redux-fill' text='Redux.js' />
          <Skill iconUrl='akar-icons:nextjs-fill' text='Next.js' />
          <Skill iconUrl='akar-icons:node-fill' text='Node.js' />
          <Skill iconUrl='simple-icons:express' text='Express.js' />
          <Skill iconUrl='bxl:mongodb' text='MongoDB' />
          <Skill iconUrl='akar-icons:python-fill' text='Python' />
          <Skill iconUrl='akar-icons:django-fill' text='Django' />
          <Skill iconUrl='bi:git' text='Git' />
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
