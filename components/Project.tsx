import { motion } from 'framer-motion';

type Props = {
  demoUrl: string;
  src: string;
  alt: string;
  title: string;
  description: string;
};

const Project = ({ demoUrl, src, alt, title, description }: Props) => {
  return (
    <div className='w-screen h-screen flex-shrink-0 snap-center flex flex-col justify-center items-center space-y-5 p-20'>
      <a href={demoUrl} target='_blank' rel='noreferrer'>
        <motion.img
          initial={{
            y: -300,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          src={src}
          alt={alt}
          className='w-56 h-56 p-1 bg-white rounded-full border-8 border-[#F7AB0A] object-cover cursor-pointer md:w-72 md:h-72 lg:w-96 lg:h-96'
        />
      </a>

      <div className='space-y-10 px-0'>
        <h4 className='text-3xl font-semibold text-center md:text-4xl lg:text-5xl'>
          {title}
        </h4>
        <p className='text-xl text-center text-gray-300 md:max-w-sm md:text-2xl lg:max-w-full lg:text-3xl'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default Project;
