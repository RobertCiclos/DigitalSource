import React from 'react'

const BtnYellowAmarillo = (props) => {
  return (
    <button
        className='justify-center border-amarilloC bg-amarilloC border-[2px] rounded-[10px]
        font-[Poppins] font-bold text-[white] text-center mx-auto
        w-[160px] h-[48px] text-[16px]
        lg:w-[295px] lg:h-[70px] lg:text-[20px]'>
        {props.opcion}
    </button>
  )
}

export default BtnYellowAmarillo