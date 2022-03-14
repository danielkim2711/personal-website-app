import { useState } from 'react';
import { Link } from 'react-router-dom';

import { BiHomeAlt } from 'react-icons/bi';
import { IoPersonOutline, IoImageOutline, IoClose } from 'react-icons/io5';
import { RiSuitcaseLine } from 'react-icons/ri';
import { IoMdPaperPlane } from 'react-icons/io';
import { AiOutlineAppstore } from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';

const Navbar = ({ executeScroll }) => {
  const [showMenu, setShowMenu] = useState(false);

  const onClick = () => {
    setShowMenu(!showMenu);
  };

  const onScroll = (e) => {
    setShowMenu(!showMenu);
    executeScroll(e.target.textContent);
  };

  return (
    <header className='w-full fixed bottom-0 left-0 z-100 bg-[#fff]'>
      <nav className='max-w-[968px] h-12 flex justify-between items-center mx-6'>
        <Link
          to='/'
          className='text-primary-color font-medium hover:text-secondary-color'
        >
          Daniel Kim
        </Link>

        <div
          className={`nav__menu fixed ${
            showMenu === true ? 'bottom-0' : 'bottom-[-100%]'
          }  left-0 w-full bg-[#fbfbfe] pt-8 px-6 pb-16 rounded-tl-3xl rounded-tr-3xl shadow-[0_-1px_4px_rgba(0,0,0,0.15)]`}
        >
          <ul className='grid gap-8 grid-cols-3'>
            <li
              className='flex flex-col items-center text-sm text-primary-color font-medium hover:text-secondary-color'
              onClick={onScroll}
            >
              <BiHomeAlt className='text-2xl mb-1' />
              Home
            </li>
            <li
              className='flex flex-col items-center text-sm text-primary-color font-medium hover:text-secondary-color'
              onClick={onScroll}
            >
              <IoPersonOutline className='text-2xl mb-1' />
              About
            </li>
            <li
              className='flex flex-col items-center text-sm text-primary-color font-medium hover:text-secondary-color'
              onClick={onScroll}
            >
              <CgFileDocument className='text-2xl mb-1' />
              Skills
            </li>
            <li
              className='flex flex-col items-center text-sm text-primary-color font-medium hover:text-secondary-color'
              onClick={onScroll}
            >
              <RiSuitcaseLine className='text-2xl mb-1' />
              Services
            </li>
            <li
              className='flex flex-col items-center text-sm text-primary-color font-medium hover:text-secondary-color'
              onClick={onScroll}
            >
              <IoImageOutline className='text-2xl mb-1' />
              Portfolio
            </li>
            <li
              className='flex flex-col items-center text-sm text-primary-color font-medium hover:text-secondary-color'
              onClick={onScroll}
            >
              <IoMdPaperPlane className='text-2xl mb-1' />
              Contact
            </li>
          </ul>
          <IoClose
            className='absolute right-5 bottom-2 text-2xl cursor-pointer text-primary-color hover:text-secondary-color'
            onClick={onClick}
          />
        </div>

        <div className='text-[#242329] font-medium text-lg cursor-pointer hover:text-secondary-color'>
          <AiOutlineAppstore onClick={onClick} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
