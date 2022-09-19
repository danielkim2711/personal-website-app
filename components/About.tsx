import { motion } from 'framer-motion';

type Props = {};

const About = (props: Props) => {
  return (
    <section id='about' className='h-screen snap-center'>
      <div className='min-h-[900px] flex flex-col relative text-center max-w-7xl px-10 justify-center mx-auto items-center md:min-h-full md:flex-row md:text-left'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
          About
        </h3>

        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          className='w-56 h-56 mb-20 flex-shrink-0 rounded-full object-cover md:mb-0 md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[500px]'
          src='/static/about-image.jpeg'
          alt='my portrait'
        />

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
          className='space-y-10 px-0 md:px-10'
        >
          <h4 className='text-2xl font-semibold md:text-4xl'>
            Here is a{' '}
            <span className='underline decoration-[#F7AB0A]/50'>little</span>{' '}
            background
          </h4>
          <p className='text-sm md:text-base'>
            Kia ora! I am a CS graduate at Unitec Institute of Technology in New
            Zealand. I have a strong passion for creating beautiful and
            functional websites, and have been constantly learning and improving
            my skills. I always look forward to see how I can make the world a
            better place.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
