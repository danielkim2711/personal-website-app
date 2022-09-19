import { motion } from 'framer-motion';

import ExperienceCard from './ExperienceCard';

import {
  jetCleaningDescriptions,
  unitecDescriptions,
} from '../experienceDescriptions';

type Props = {};

const Experience = (props: Props) => {
  return (
    <section id='experience' className='snap-center'>
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
        className='relative min-h-[1100px] flex flex-col justify-evenly items-center text-left overflow-hidden max-w-full px-10 mx-auto md:flex-row'
      >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
          Experience
        </h3>

        <div className='w-full flex items-center space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
          <ExperienceCard
            src='/static/jet-cleaning-logo.jpeg'
            alt='jet cleaning logo'
            title='Franchisee'
            company='Jet Cleaning Services'
            dates='Dec 2017 - Jun 2022'
            descriptionType='Responsibilities'
            descriptions={jetCleaningDescriptions}
          />
          <ExperienceCard
            src='/static/unitec-logo.jpeg'
            alt='unitec logo'
            title='Bachelor of Computing Systems'
            company='Unitec Institute of Technology'
            dates='2017 - Jul 2022'
            descriptionType='Achievements'
            descriptions={unitecDescriptions}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
