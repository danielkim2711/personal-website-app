import { MdEmail, MdLocationOn } from 'react-icons/md';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert('Please fill out missing fields');
    } else {
      window.location.href = `mailto:danielkim2711@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    }
  };

  return (
    <section id='contact' className='snap-center'>
      <div className='relative min-h-[1000px] flex justify-center items-center text-center lg:min-h-[1000px]'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
          Contact
        </h3>

        <div className='flex flex-col space-y-10'>
          <h4 className='text-4xl font-semibold text-center md:text-5xl'>
            Let&apos;s{' '}
            <span className='underline decoration-[#F7AB0A]/50'>Talk!</span>
          </h4>
          <div className='flex justify-center items-center space-x-4'>
            <MdEmail className='w-7 h-7 text-[#F7AB0A] animate-pulse' />
            <a href='mailto:danielkim2711@gmail.com'>
              <p className='text-2xl'>danielkim2711@gmail.com</p>
            </a>
          </div>
          <div className='flex justify-center items-center space-x-4'>
            <MdLocationOn className='w-7 h-7 text-[#F7AB0A] animate-pulse' />
            <p className='text-2xl'>Auckland, New Zealand</p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col items-center space-y-2 md:items-stretch'
          >
            <div className='flex space-x-2 w-4/5'>
              <input
                {...register('name')}
                type='text'
                placeholder='Name'
                className='contact-input'
              />
              <input
                {...register('email')}
                type='email'
                placeholder='Email'
                className='contact-input'
              />
            </div>
            <input
              {...register('subject')}
              type='text'
              placeholder='Subject'
              className='contact-input'
            />
            <textarea
              {...register('message')}
              placeholder='Message'
              className='contact-input h-36'
            ></textarea>
            <button
              type='submit'
              className='w-4/5 bg-[#F7AB0A] px-10 py-5 rounded-md text-black font-bold text-lg md:w-full'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
