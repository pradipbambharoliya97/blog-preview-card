import './App.scss';
import { cardData } from './utils/copnstants';

function App() {
  return (
    <main className='bg-lime h-screen w-full flex items-center justify-center p-6'>
      <section className='flex flex-col gap-4 card-shadow bg-white max-w-sm border-2 border-black-50 rounded-3xl p-6'>
        <img src={cardData.image} alt='blog-image' className='rounded-xl' />
        <p className='p-2.5 py-1 mt-2 rounded-md font-bold tracking-tight bg-lime max-w-fit'>
          {cardData.tag}
        </p>
        <p className='text-sm font-medium'>Published {cardData.publishDate}</p>
        <h3 className='text-xl sm:text-2xl transition duration-150 font-bold hover:text-lime cursor-pointer'>
          {cardData.title}
        </h3>
        <p className='text-base text-gray-500'>{cardData.descroption}</p>
        <div className='flex items-center gap-2'>
          <img src={cardData.avatar} alt='avatar' className='w-8' />
          <p className='font-bold'>{cardData.name}</p>
        </div>
      </section>
    </main>
  );
}

export default App;
