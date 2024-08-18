import { memo } from 'react';
import './App.scss';
import { cardData } from './utils/copnstants';

const App = () => (
  <main
    role='main'
    className='bg-lime h-screen w-full flex items-center justify-center p-6'
  >
    <section className='flex flex-col gap-3 card-shadow bg-white max-w-sm border border-black-50 rounded-3xl p-6'>
      <div className='flex flex-col gap-2'>
        <img
          src={cardData.image}
          alt='blog-image'
          className='rounded-xl'
          loading='lazy'
        />
        <p className='p-2.5 py-1 mt-4 rounded-md font-bold tracking-tight bg-lime max-w-fit'>
          {cardData.tag}
        </p>
        <p className='text-sm font-medium'>Published {cardData.publishDate}</p>
      </div>
      <div className='flex flex-col gap-4'>
        <h3 className='text-xl sm:text-2xl transition duration-150 font-bold hover:text-lime cursor-pointer'>
          {cardData.title}
        </h3>
        <p className='text-base text-gray-500'>{cardData.descroption}</p>
        <div className='flex items-center gap-2'>
          <img
            src={cardData.avatar}
            alt='avatar'
            className='w-8'
            loading='lazy'
          />
          <p className='text-lg font-bold'>{cardData.name}</p>
        </div>
      </div>
    </section>
  </main>
);

export default memo(App);
