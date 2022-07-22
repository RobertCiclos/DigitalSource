import React from 'react';
import BtnRedEmpezar from "../components/buttons/BtnRedEmpezar";

const Home = () => {
  return (
    <div className=''>
      <section>
        <div 
          className='mx-auto relative
          w-[414px] h-[284px]
          md:w-[768px] md:h-[380px]
          lg:w-[1440px] lg:h-[635px]'>
          <img src="./imagenes/fondohero.png"
            className='w-[414px] h-[284px] mx-auto
            md:w-[768px] md:h-[380px]
            lg:w-[1440px] lg:h-[635px]'/>
          <h1
            className='absolute top-[65px] right-[78.15px]
            md:top-[90px] md:right-[159px]
            lg:top-[142px] lg:right-[255px]'>
            ¡A mangiare con nuestras recetas! 
          </h1>
          <div 
            className="absolute top-[159px] right-[112.5px]
            md:top-[245px] md:right-[289.5px]
            lg:top-[387px] lg:right-[550px]">
            <BtnRedEmpezar/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home