import React from 'react';

const CardComida = (props) => {
    return (
        <div className='w-[182px] '>
          <img src={props.imagen}
            className='w-[98px] h-[80] mx-auto
            lg:w-[182px] lg:h-[100px]'/>
          <h5 
            className='text-[white] text-center font-[Poppins] pt-2
            lg:text-[25px]'>
            {props.texto}
          </h5>
        </div>
    )
}

export default CardComida