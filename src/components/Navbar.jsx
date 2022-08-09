import React from 'react'
import LogoNavBar from '../components/svg/navbar/LogoNavBar'
import CarritoNavBar from '../components/svg/navbar/CarritoNavBar'
import BtnRegistrate from './buttons/BtnRegistrate'
import BtnBrownItems from './buttons/BtnBrownItems'

const Navbar = () => {
  return (
    <section>
    <div 
      className='w-[414px] h-[76px] flex items-center shadow-lg mx-auto px-[16px]
      lg:px-[130px] lg:w-[1440px] lg:h-[80px]'>
      <navbar 
        className="grid grid-cols-2 items-center gap-[39px]
        lg:gap-0 ">
          <img src="./svg/Navbar/Logomangiare.svg"
            className='w-[134px] h-[19px] mt-[9px]
            lg:w-[260px] lg:h-[36px] lg:mt-[10px]'/>
          <div 
            className='grid 
            lg:w-[744px] lg:h-[48px] lg:ml-[-145px] lg:grid-cols-4'>
            <button 
              className='boton ml-[-50px] invisible
              lg:visible'>
              Menú de comidas
            </button>
            <button 
              className='boton ml-[-100px] invisible
              lg:visible'>
              Blog
            </button>
            <button 
              className=' ml-[-60px] invisible
              lg:visible'>
              <BtnBrownItems/>
            </button>
            <button 
              className='mt-[-90px] 
              lg:ml-[-7px] lg:mt-[0px]'>
              <BtnRegistrate/>
            </button>
            <img src="./svg/Navbar/MenuNavBar.svg"
              className='absolute pl-[160px] pt-[35px] visible
              lg:invisible'/>
          </div>
      </navbar>
    </div>
  </section>
  )
}

export default Navbar