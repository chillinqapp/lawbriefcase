import React from 'react';

import config from '../config/index.json';

const MainHeroImage = () => {
  const { mainHero } = config;
  return (
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        className=" w-full h-[30rem] sm:h-[35rem] md:h-[50rem] lg:h-full"
        src={mainHero.img}
        alt="Law Briefcase"
      />
    </div>
  );
};

export default MainHeroImage;
