import Link from 'next/link';
import Image from 'next/image';

type Props = {};

const Footer = (props: Props) => {
  return (
    <Link href='#hero'>
      <footer className='sticky bottom-5 w-full cursor-pointer z-20'>
        <div className='flex justify-center items-center'>
          <Image
            src='/static/about-image.jpeg'
            alt='my portrait'
            width={40}
            height={40}
            className='rounded-full object-cover filter grayscale hover:grayscale-0'
          />
        </div>
      </footer>
    </Link>
  );
};

export default Footer;
