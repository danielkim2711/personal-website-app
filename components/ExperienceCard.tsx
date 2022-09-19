import Image from 'next/image';
import { motion } from 'framer-motion';

type Props = {
  src: string;
  alt: string;
  title: string;
  company: string;
  dates: string;
  descriptionType: string;
  descriptions: string[];
};

const ExperienceCard = ({
  src,
  alt,
  title,
  company,
  dates,
  descriptionType,
  descriptions,
}: Props) => {
  return (
    <article className='flex flex-col items-center rounded-lg space-y-7 flex-shrink-0 w-[300px] snap-center bg-[#292929] opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 p-10 md:w-[700px] lg:w-[800px]'>
      <motion.div
        initial={{
          y: -100,
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
      >
        <Image
          className='relative rounded-full object-cover xl:w-[200px] xl:h-[200px]'
          src={src}
          alt={alt}
          width={128}
          height={128}
        />
      </motion.div>

      <div className='px-0 md:px-10'>
        <h4 className='text-2xl font-light md:text-4xl'>{title}</h4>
        <p className='font-bold text-xl mt-1 md:text-2xl'>{company}</p>
        <p className='uppercase py-5 text-gray-300 '>{dates}</p>

        {descriptionType === 'Responsibilities' ? (
          <p className='mb-2'>Responsibilities:</p>
        ) : (
          <p className='mb-2'>Achievements:</p>
        )}
        <ul className='list-disc ml-5 text-xs md:text-lg'>
          {descriptions.map((description, index) => (
            <li key={index}>{description}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
