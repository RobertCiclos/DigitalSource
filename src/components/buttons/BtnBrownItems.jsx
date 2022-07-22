import React from 'react';
import CarritoNavBar from '../svg/navbar/CarritoNavBar';

const BtnBrownItems = (props) => {
  return (
    <button 
        className='flex justify-center items-center bg-marronC gap-[15px]
        w-[205px] h-[48px] rounded-[7px]'>
        <CarritoNavBar/>
        <p 
            className='font-[Poppins] font-bold
            tex-[16px] text-[white]'>
            Tus items (0)
        </p>
    </button>
  )
}

export default BtnBrownItems