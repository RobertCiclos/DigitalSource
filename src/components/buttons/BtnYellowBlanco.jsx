import React from 'react'

const BtnYellowBlanco = (props) => {
  return (
    <button
        className='font-[Poppins] font-bold text-amarilloC text-center justify-center border-amarilloC border-[2px] rounded-[10px]
        w-[160px] h-[48px] text-[16px]
        lg:w-[295px] lg:h-[70px] lg:text-[20px]'>
        {props.opcion}
    </button>
  )
}

export default BtnYellowBlanco