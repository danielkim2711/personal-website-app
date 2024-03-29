import Link from 'next/link';

import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

type Props = {};

const Header = (props: Props) => {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className='flex flex-row items-center'
      >
        <SocialIcon
          url='https://github.com/danielkim2711'
          fgColor='gray'
          bgColor='transparent'
          target='_blank'
        />
        <SocialIcon
          url='https://www.linkedin.com/in/danielkim2711'
          fgColor='gray'
          bgColor='transparent'
          target='_blank'
        />
        <SocialIcon
          url='https://danielpersonalblog.herokuapp.com'
          fgColor='gray'
          bgColor='transparent'
          target='_blank'
          label='my blog'
        />
      </motion.div>

      <Link href='#contact'>
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className='flex flex-row items-center text-gray-300 cursor-pointer'
        >
          <SocialIcon
            className='cursor-pointer'
            network='email'
            fgColor='gray'
            bgColor='transparent'
          />
          <p className='uppercase hidden text-sm text-gray-400 md:inline-flex'>
            Get in touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
};

export default Header;
