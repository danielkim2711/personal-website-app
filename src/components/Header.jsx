import { Link } from 'react-router-dom';

import { BiHomeAlt } from 'react-icons/bi';
import { IoPersonOutline, IoImageOutline } from 'react-icons/io5';
import { GrDocumentText } from 'react-icons/gr';
import { RiSuitcaseLine } from 'react-icons/ri';
import { IoMdPaperPlane } from 'react-icons/io';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to='/'>Daniel Kim</Link>

        <div>
          <ul>
            <li>
              <Link to='/'>
                <BiHomeAlt />
                Home
              </Link>
            </li>
            <li>
              <Link to='/'>
                <IoPersonOutline />
                About
              </Link>
            </li>
            <li>
              <Link to='/'>
                <GrDocumentText />
                Skills
              </Link>
            </li>
            <li>
              <Link to='/'>
                <RiSuitcaseLine />
                Services
              </Link>
            </li>
            <li>
              <Link to='/'>
                <IoImageOutline />
                Portfolio
              </Link>
            </li>
            <li>
              <Link to='/'>
                <IoMdPaperPlane />
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
