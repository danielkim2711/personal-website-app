import Link from 'next/link';
import Image from 'next/image';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className='sticky bottom-5 w-full z-20'>
      <div className='flex justify-center items-center'>
        <Link href='#hero'>
          <span>
            <Image
              src='/static/about-image.jpeg'
              alt='my portrait'
              width={40}
              height={40}
              className='rounded-full object-cover cursor-pointer filter grayscale hover:grayscale-0'
            />
          </span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
