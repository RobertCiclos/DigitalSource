import React from 'react'

const BtnGreenSi = (props) => {

  return (
    <button 
      className='w-[248px] h-[135px] mx-auto rounded-[5px] border-[2px]
      text-[#545454] bg-[white] border-[#1B1713]
      hover:text-[white] hover:bg-amarilloC hover:border-amarilloC'>
        <img src={props.imagen} 
        className="mx-auto h-[60px]"/>
        <p
          className='font-[Roboto] font-medium text-20px text-center mt-[12px]'>
          {props.metodo}
        </p>
    </button>
  )
}

export default BtnGreenSi