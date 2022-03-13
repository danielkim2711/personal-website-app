import { useState } from 'react';
import { Link } from 'react-router-dom';

import { BiHomeAlt } from 'react-icons/bi';
import { IoPersonOutline, IoImageOutline, IoClose } from 'react-icons/io5';
import { RiSuitcaseLine } from 'react-icons/ri';
import { IoMdPaperPlane } from 'react-icons/io';
import { AiOutlineAppstore } from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const onClick = () => setShowMenu(!showMenu);

  return (
    <header
      className='w-full fixed bottom-0 left-0 z-100 bg-[#fff]'
      id='header'
    >
      <nav className='max-w-[968px] h-12 flex justify-between items-center mx-6'>
        <Link to='/' className='text-[#242329] font-medium hover:text-[#777]'>
          Daniel Kim
        </Link>

        <div
          className={`nav__menu fixed ${
            showMenu === true ? 'bottom-0' : 'bottom-[-100%]'
          }  left-0 w-full bg-[#fbfbfe] pt-8 px-6 pb-16 rounded-tl-3xl rounded-tr-3xl shadow-[0_-1px_4px_rgba(0,0,0,0.15)]`}
          id='nav-menu'
        >
          <ul className='grid gap-8 grid-cols-3'>
            <li className='nav__item'>
              <Link
                to='#home'
                className='flex flex-col items-center text-sm text-[#242329] font-medium hover:text-[#777]'
                onClick={onClick}
              >
                <BiHomeAlt className='text-2xl mb-1' />
                Home
              </Link>
            </li>
            <li className='nav__item'>
              <Link
                to='#about'
                className='flex flex-col items-center text-sm text-[#242329] font-medium hover:text-[#777]'
                onClick={onClick}
              >
                <IoPersonOutline className='text-2xl mb-1' />
                About
              </Link>
            </li>
            <li className='nav__item'>
              <Link
                to='#skills'
                className='flex flex-col items-center text-sm text-[#242329] font-medium hover:text-[#777]'
                onClick={onClick}
              >
                <CgFileDocument className='text-2xl mb-1' />
                Skills
              </Link>
            </li>
            <li className='nav__item'>
              <Link
                to='#services'
                className='flex flex-col items-center text-sm text-[#242329] font-medium hover:text-[#777]'
                onClick={onClick}
              >
                <RiSuitcaseLine className='text-2xl mb-1' />
                Services
              </Link>
            </li>
            <li className='nav__item'>
              <Link
                to='#portfolio'
                className='flex flex-col items-center text-sm text-[#242329] font-medium hover:text-[#777]'
                onClick={onClick}
              >
                <IoImageOutline className='text-2xl mb-1' />
                Portfolio
              </Link>
            </li>
            <li className='nav__item'>
              <Link
                to='#contact'
                className='flex flex-col items-center text-sm text-[#242329] font-medium hover:text-[#777]'
                onClick={onClick}
              >
                <IoMdPaperPlane className='text-2xl mb-1' />
                Contact
              </Link>
            </li>
          </ul>
          <IoClose
            className='absolute right-5 bottom-2 text-2xl cursor-pointer text-[#242329] hover:text-[#777]'
            id='nav-close'
            onClick={onClick}
          />
        </div>

        <div className='nav__btns'>
          <div
            className='text-[#242329] font-medium text-lg cursor-pointer hover:text-[#777]'
            id='nav-toggle'
          >
            <AiOutlineAppstore onClick={onClick} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
