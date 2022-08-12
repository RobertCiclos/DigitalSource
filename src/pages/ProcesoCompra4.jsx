import React from 'react'

const ProcesoCompra4 = () => {
  return (
    <section>
      <div
        className="w-[350px] h-[398px] mt-[24px] rounded-lg shadow-xl mx-auto
        lg:w-[780px] lg:h-[483px] lg:mt-[115px] ">
        <h1 
          className="titulocompra3  text-center w-[310px] pt-[27px] 
          lg:pt-[34px] lg:w-[539px]">
          ¡Compra realizada con exito!         
        </h1>
        <h2 
          className="text-left font-semibold font-[Poppins] text-[17px] pt-[14px] pl-[25px] text-[#1B1713]
          lg:pt-[48px] lg:pl-[79px] lg:text-[25px]">
          Detalle de la compra 
        </h2>
        <div 
          className='grid grid-cols-[230px_60px] mt-[8px] 
          lg:grid-cols-2 lg:mt-[24px]'>
          <p  
            className="ml-[25px] 
            lg:ml-[80px] kitcompra ">
            - 1 kit de lorem ipsum
          </p>
          <p 
            className='pl-[45px] 
            lg:pl-[255px] numerocompra5'>
            $50
          </p>
          <p 
            className='ml-[25px] pt-[10px]
            lg:ml-[80px] lg:pt-[0px] kitcompra '>
            - 1 kit de azucar
          </p>
          <p 
            className='pl-[45px] pt-[10px]
            lg:pl-[255px] lg:pt-[0px] numerocompra5'>
            $15
          </p>
          <p 
            className='ml-[25px] pt-[10px]
            lg:ml-[80px] lg:pt-[0px] kitcompra '>
            - 1 kit de arroz
          </p>
          <p 
            className='pl-[45px] pt-[10px]
            lg:pl-[255px] lg:pt-[0px] numerocompra5'>
            $15
          </p>
        </div>
        <div 
            className="grid  mx-auto border-t-[2px] w-[310px] mt-[18px]
            grid-cols-2  
            lg:mt-[30px] lg:w-[640px]">
            <h2 
                className="text-[#7BB037] text-[22px] font-[Poppins] font-semibold text-left pt-[8px] pl-[10px]
                lg:pt-[14px] lg:text-[25px] lg:pl-[0px]">
                Total</h2>
            <p 
                className="font-[Poppins] font-semibold text-[#7BB037] text-[22px] pt-[8px] pl-[90px]
                lg:pt-[14px] lg:pl-[255px] lg:text-[25px]">
                $80
            </p>
        </div>
        <div 
          className='grid grid-cols-2 mx-auto w-[276px] mt-[24px]
          lg:grid-cols-[27px_135px_480px] lg:w-[640px] lg:mt-[36px]'>
          <img src="svg/procesocompra/caja.svg" 
            className=''/>
          <p 
            className='text-[16px] font-bold font-[Lato] ml-[-100px]
            lg:ml-[7px] '>
            Fecha de entrega:
          </p>
          <p 
            className='font-normal text-[16px] font-[Lato] ml-[37px] w-[241px]
            lg:ml-3 lg:w-[480px]'>
            El pedido será enviado el domingo 27 de abril entre las 10am y 1pm.
          </p>
        </div>
      </div>
      <div 
        className='w-[333px] h-[48px] mt-[82px] pb-[100px] mx-auto text-center text-[20px] font-normal font-[Lato] text-[#1B1713]
        lg:w-[409px] lg:h-[59px] lg:mt-[82px] lg:pb-[200px] '>
        *Tu boleta de compra ha sido envíado al correo: ejemplo@gmail.com
      </div>
    </section>
  )
}

export default ProcesoCompra4
