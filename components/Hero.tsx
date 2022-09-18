import { Cursor, useTypewriter } from 'react-simple-typewriter';

import BackgroundCircle from './BackgroundCircle';

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ["Kia ora, I'm Daniel", 'Front End Engineer'],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className='h-screen flex flex-col space-y-8 justify-center items-center text-center overflow-hidden'>
      <BackgroundCircle />
      <h1>
        <span>{text}</span>
        <Cursor cursorColor='#F7AB0A' />
      </h1>
    </div>
  );
};

export default Hero;
