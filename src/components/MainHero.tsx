import React from 'react';

import config from '../config/index.json';

const MainHero = () => {
  const { mainHero } = config;
  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">{mainHero.title}</span>{' '}
          <span className={`block text-primary xl:inline`}>
            {mainHero.subtitle}
          </span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          {mainHero.description}
        </p>
        <div className='flex flex-col md:flex-row justify-center lg:justify-start md:items-start my-12 gap-10 md:gap-6 text-gray-600 text-[1.4rem] font-bold'>
          <div className='flex flex-col md:w-[35%] justify-center items-center gap-4'>
            <img src="/assets/images/call.png" className='w-[15%] md:w-[25%]' alt="hey" />
            <p className='text-center'>30-mins Call with <br /> our Lawyers</p>
          </div>
          <div className='flex flex-col justify-center items-center gap-4'>
            <img src="/assets/images/hourglass.png" className='w-[15%] md:w-[25%]' alt="hey" />
            <p className='text-center'>Solution <br /> in 24hrs</p>
          </div>
          <div className='flex flex-col justify-center relative z-[1] items-center gap-4'>
            <img src="/assets/images/eye.png" className='w-[15%] md:w-[25%]' alt="hey" />
            <p className='text-center'>100% <br /> Confidential</p>
          </div>
        </div>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <a target='_blank'
              href="https://wa.me/+919818365369"
              className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10`}
            >
              {mainHero.primaryAction.text}
            </a>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <a target='_blank'
              href="tel:+919818365369"
              className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md border-primary text-primary bg-background hover:bg-border hover:text-white md:py-4 md:text-lg md:px-10`}
            >
              {mainHero.secondaryAction.text}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainHero;
