import React from 'react';

const CardProcesoCompra = (props) => {
 
    return (
        <div 
            className="w-[326px] h-[67px] mx-auto border-b mt-[20px] border-[#C4C4C4] 
            lg:w-[1028px] lg:h-[230px] lg:mt-[30px] ">
            <div 
                className="grid grid-cols-2
                lg:grid-cols-2 ">
                    <img src="./imagenes/seccion/comida1.png" 
                    className="invisible w-[120px] h-[91px]
                    lg:visible lg:pl-[34px] lg:w-[268px] lg:h-[189px]"/>
                    <div 
                        className=" w-[153px] h-[27px]
                        lg:w-[520px] lg:h-[32px] lg:ml-[-190px]">
                        <div 
                            className=' grid grid-cols-[1px_400px] 
                            lg:grid-cols-[520px_500px]'>
                            <h2 
                                className=" font-[Poppins] font-semibold text-[#1b1713] text-[14px] ml-[-177px]  
                                lg:text-[23px] lg:ml-[18px]">
                                Ensalada de papines con pesto de cilantro
                            </h2>
                            <div 
                                className='pl-[90px] flex gap-[30px]
                                lg:pl-[96px]'>
                                    <button 
                                        className=' font-extrabold ml-[-70px]  visible text-[#6FC12B] text-[13px] font-[Lato]
                                    lg:invisible'>
                                        Más Detalles 
                                        <span 
                                            className="pl-[7px]">ʌ</span>  
                                    </button>
                                    <img src="./svg/seccion/delete 1.svg" 
                                        className=" w-[20px] h-[20px] mt-[10px]
                                        lg:w-[33px] lg:h-[33px] lg:mt-[0px]"/>
                            </div>
                        </div>
                        <div 
                            className="grid grid-cols-4 ml-[35px]">
                            <p 
                                className="text-[24px] font-[Lato] font-bold mt-[98px] invisible
                                lg:visible ">
                                Precio:
                            </p>
                            <p 
                                className="text-[24px] font-[Lato] font-normal mt-[98px] ml-[-35px] invisible
                                lg:visible ">
                                $30.00
                            </p>
                            <p 
                                className="text-[18px] font-[Lato] font-normal mt-[102px] ml-[-50px]">
                                
                            </p>
                            <div 
                                className="mt-[51px]">
                                <p 
                                    className="w-[172px] h-[19px] ml-[-55px] invisible
                                    lg:visible ">
                                    Cantidad de porciones:
                                </p>
                                <p>
                                    <img src="./svg/seccion/contador.svg"
                                        className='ml-[-55px] mt-[22px] invisible
                                        lg:visible '/>
                                </p>
                            </div>
                            
                        </div>
                    </div>
            </div>
        </div>
    )

}

export default CardProcesoCompra