import React from 'react'
import Ahorra from '../svg/why/Ahorra.jsx'
import Nuevas from '../svg/why/Nuevas.jsx'
import Preparacion from '../svg/why/Preparacion.jsx'
import Productos from '../svg/why/Productos.jsx'

const Why = (props) => {
    return (
        <div 
          className='w-[170px] h-[186px] mx-auto mt-[30px] shadow-xl
          lg:w-[245px] lg:h-[267px] lg:mt-[46px] '>
          <img src={props.imagen} 
            className="w-[71px] h-[71px] object-left
            lg:w-[102px] lg:h-[102px]"/>
            <div>
              <h4 
                className='h4 text-center text-[#1B1713] pl-[40px]
                lg:pl-[70px]'>
                {props.texto}
              </h4>
              <h5 
                className='font-[Lato] text-[#1B1713] text-center pl-[30px] pt-[5px]
                lg:pt-[21px] lg:text-[20px] lg:pl-[70px]'> 
                {props.subtitulo}
              </h5>
            </div>
        </div>
    )
}

export default Why 