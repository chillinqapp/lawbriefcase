import React from 'react';

import config from '../config/index.json';
import Divider from './Divider';

const Product = () => {
  const { product } = config;
  const [firstItem, secondItem] = product.items;

  return (
    <section className={`bg-background py-8`} id="product">
      <div className={`container max-w-5xl mx-auto m-8`}>
        {/* <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {product.title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h1> */}
        <Divider />
        <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
          <div className={`flex flex-col justify-center items-center sm:w-1/2 p-6 mt-20`}>
            <h3
              className={`text-6xl text-center text-gray-800 font-bold leading-none mb-6`}
            >
              Our <span className='text-primary'>Mission</span>
            </h3>
            <p className={`text-gray-600 text-[1.3rem]`}>Everyone deserves the Right to Information and we strive to provide you the legal guidance you need – you’re just one quick call away!</p>
            <br />
            <p className={`text-gray-600 text-[1.3rem]`}>Get the justice you deserve minus the constant confusion with legal jargon. Our best in class lawyers can simplify the law for you in 30 minutes!</p>
            <br />
            <p className={`text-gray-600 text-[1.3rem]`}>Best part? It’s completely free! As per Article 39A of the Constitution, we assist people who cannot afford legal representation and access to the court system</p>
          </div>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img
              className="h-6/6"
              src={firstItem?.img}
              alt={firstItem?.title}
            />
          </div>
        </div>
        <div className={`flex flex-wrap flex-col sm:flex-row`}>
          <div className={`w-full sm:w-[40%] p-6 mt-20`}>
            <img
              className="w-full h-[600px]"
              src={secondItem?.img}
              alt={secondItem?.title}
            />
          </div>
          <div className={`w-full flex flex-col justify-center items-center sm:w-[60%] p-6 `}>
            <div className={`flex flex-col justify-center items-center`}>
              <h3
                className={`text-6xl text-center tracking-wider text-gray-800 font-bold leading-none mb-6`}
              >
                KNOW YOUR <span className='text-primary'>LEGAL RIGHTS</span> TODAY
              </h3>
              <p className={`text-gray-600 text-center text-[1.65rem] font-bold mb-8`}>We give genuine solutions to your problems</p>
              <div className=" w-full flex justify-center items-center">
                <a target="__blank" href="https://docs.google.com/forms/d/e/1FAIpQLSerbleJ7p8JMMstMJU6YhHlXZJSbLYgAgOxBG7rjBMFt9xSLQ/viewform" className="w-[50%] flex items-center justify-center px-8 py-3 text-base font-medium rounded-xl text-background bg-primary md:py-4 md:text-lg md:px-10">
                  Drop Your Query Now!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
