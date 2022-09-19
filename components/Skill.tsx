import { Icon } from '@iconify/react';

type Props = {
  iconUrl: string;
  text: string;
};

const Skill = ({ iconUrl, text }: Props) => {
  return (
    <div className='relative cursor-pointer'>
      <Icon
        icon={iconUrl}
        className='w-24 h-24 p-3 rounded-full border border-gray-500 md:w-28 md:h-28 lg:w-32 lg:h-32'
      />
      <div className='absolute top-0 h-24 w-24 rounded-full opacity-0 transition duration-300 ease-in-out hover:opacity-80 hover:bg-white md:w-28 md:h-28 lg:w-32 lg:h-32'>
        <div className='flex items-center justify-center h-full'>
          <p className="text-lg font-bold text-black font-['Dosis']">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
