import { SocialIcon } from 'react-social-icons';

type Props = {};

const Header = (props: Props) => {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <div className='flex flex-row items-center'>
        <SocialIcon
          url='https://github.com/danielkim2711'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://www.linkedin.com/in/danielkim2711'
          fgColor='gray'
          bgColor='transparent'
        />
      </div>

      <div className='flex flex-row items-center text-gray-300 cursor-pointer'>
        <SocialIcon
          className='cursor-pointer'
          network='email'
          fgColor='gray'
          bgColor='transparent'
        />
        <p className='uppercase hidden text-sm text-gray-400 md:inline-flex'>
          Get in touch
        </p>
      </div>
    </header>
  );
};

export default Header;
