import React from 'react'
import BtnRegistrate from './buttons/BtnRegistrate'
import BtnBrownItems from './buttons/BtnBrownItems'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <div 
        className='w-[414px] h-[76px] flex items-center shadow-lg mx-auto px-[16px]
        lg:px-[130px] lg:w-[1440px] lg:h-[80px]'>
        <nav 
          className="grid grid-cols-2 items-center gap-[39px]
          lg:gap-0 ">
            <img src="./svg/Navbar/Logomangiare.svg"
              className='w-[134px] h-[19px] mt-[9px]
              lg:w-[260px] lg:h-[36px] lg:mt-[10px]'/>
            <div 
              className='grid 
              lg:w-[744px] lg:h-[48px] lg:ml-[-145px] lg:grid-cols-4'>
              <Link to="/"
                className='boton ml-[-20px] mt-[15px] invisible
                lg:visible'>
                Menú de comidas
              </Link>
              <Link to="/"
                className='boton ml-[20px] mt-[15px] invisible
                lg:visible'>
                Blog
              </Link>
              <Link to="/ProcesodeCompra1"
                className=' ml-[-75px] invisible
                lg:visible'>
                  <BtnBrownItems/>
              </Link>
              <Link  to="/"
                className='mt-[-80px] ml-[-15px] 
                lg:ml-[-20px] lg:mt-[0px]'>
                <BtnRegistrate/>
              </Link>
              <img src="./svg/Navbar/MenuNavBar.svg"
                className='absolute pl-[150px] pt-[52px] visible
                lg:invisible'/>
            </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar