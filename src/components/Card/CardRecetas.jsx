import React from 'react'

const CardRecetas = (props) => {
    return (
    <div 
        className='relative
        w-[172px] h-[225px]
	    lg:w-[270px] lg:h-[289px] self-center'>
        <p 
            className='font-[Poppins] font-bold text-[#F3B12A] absolute
            text-[75.41px] left-[23px] top-[30px]
            lg:text-[120px] lg:left-[23px] lg:top-[30px]'>
            {props.number}
        </p>
        <img src={props.plato}
            className="absolute top-[30px] 
            left-[45px] h-[110px] w-[110px]
            lg:left-[53px] lg:h-[172px] lg:w-[172px]"
        />
        <div className='absolute top-[158px] lg:top-[214px]'>
            <p
                className='font-[Poppins] font-semibold text-[#1B1713] flex text-center mx-auto
                text-[16px] w-[172px] pb-[2px]
                lg:text-[21px] lg:w-[230px] lg:pb-[11px]'>
                {props.nombre}
            </p>
            <div 
                className="grid text-[#1B1713] justify-center mx-auto
                grid-cols-[61px_105px] gap-[6px]
                lg:grid-cols-[75.82px_131.81px] lg:gap-[35.51px]">
                <div 
                    className='flex gap-[4px] lg:gap-[8.23px] items-center justify-center'>
                    <img src='./svg/Recetas/SVG-TiempoRecetas.svg'
                        className='w-[13px] h-[15px] lg:w-[19.66px] lg:h-[23px]'/>
                    <p 
                        className='font-[Lato]  font-regular text-[#1B1713] 
                        text-[14px] lg:text-[15px]'>
                        24 min
                    </p>
                </div>
                <div 
                    className='flex gap-[4px] lg:gap-[8.23px] items-center'>
                    <img src="./svg/Recetas/SVG-IngredientesRecetas.svg"
                        className='w-[13px] h-[15px] lg:w-[20.14px] lg:h-[22px]'/>
                    <p
                        className='font-[Lato]  font-regular text-[#1B1713]
                        text-[14px] lg:text-[15px]'>
                        8 ingredientes
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardRecetas