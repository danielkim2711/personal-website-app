import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Image from 'next/image';
import Link from 'next/link';

import BackgroundCircle from './BackgroundCircle';

type Props = {};

const Hero = (props: Props) => {
  const [text] = useTypewriter({
    words: ["Kia ora, I'm Daniel", 'Front End Engineer'],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section id='hero' className='snap-start'>
      <div className='h-screen flex flex-col space-y-8 justify-center items-center text-center overflow-hidden'>
        <BackgroundCircle />
        <Image
          className='relative rounded-full mx-auto object-cover'
          src='/static/hero-image.jpeg'
          alt='my portrait'
          width={128}
          height={128}
        />
        <div className='z-20'>
          <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[10px] md:tracking-[15px]'>
            Front End Engineer
          </h2>
          <h1 className='text-3xl font-semibold px-10 md:text-6xl'>
            <span className='mr-3'>{text}</span>
            <Cursor cursorColor='#F7AB0A' />
          </h1>

          <div className='pt-5'>
            <Link href='#about'>
              <a>
                <button className='btn-hero'>About</button>
              </a>
            </Link>
            <Link href='#experience'>
              <a>
                <button className='btn-hero'>Experience</button>
              </a>
            </Link>
            <Link href='#skills'>
              <a>
                <button className='btn-hero'>Skills</button>
              </a>
            </Link>
            <Link href='#projects'>
              <a>
                <button className='btn-hero'>Projects</button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
