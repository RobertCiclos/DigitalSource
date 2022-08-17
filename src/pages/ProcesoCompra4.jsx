import React from 'react'
import { Link } from 'react-router-dom'
import BtnYellowAmarillo from '../components/buttons/BtnYellowAmarillo'
import BtnYellowPago from '../components/buttons/BtnYellowPago'

const ProcesoCompra4 = () => {
  return (
    <div>
      <div 
        className='mx-auto lg:order-last rounded-[10px]
        w-[380px] py-[55px] pt-[40px] mt-[19px] shadow-lg
        lg:w-[1073px] lg:pt-[37px] lg:pl-[124px] lg:pr-[93px] lg:mt-[62px]'>
        <div 
          className='grid mx-auto order-last
          grid-cols-1
          lg:grid-cols-[261px_506px] lg:gap-[87px]'>
          <div className='lg:order-2'>
            <p
              className='font-[Poppins] font-bold 
              text-center text-[20px] mb-[22px]
              lg:text-left lg:text-[29px] lg:mt-[10px] lg:mb-[63px]'>
              Kit de comida
            </p>
            <div
              className='grid
              grid-cols-[142px_1fr] gap-x-[13px] gap-y-[20px] px-[55px]
              lg:grid-cols-[142px_348px] lg:gap-x-[16px] lg:gap-y-[33px] lg:px-[0px]'>
              <h5> Cantidad </h5>
              <h6> 5 platos </h6>
              <h5> Precio Total </h5>
              <h6> US$ 130.00 </h6>
              <h5> Fecha de entrega: </h5>
              <h6
               className='col-span-2 lg:col-span-1 mb-[33px] text-justify'>
                El pedido será enviado el domingo 27 de abril entre las 10am y 1pm.
              </h6>
            </div>
          </div> 
          <img src='./imagenes/question.png'
            className='lg:order-1
            w-[208px] h-[244px] mx-[75px]
            lg:w-[261px] lg:h-[310px] lg:mx-[0px]'
          />
        </div>
        
      </div>
      <h1 
        className="titulocompra3  text-center
        lg:pt-[34px]">
        Método de pago
      </h1>
      <div
        className='grid mx-auto
        grid-cols-1 gap-y-[35px] w-[248px] mt-[45px]
        lg:grid-cols-3 lg:gap-x-[40px] lg:w-[824px] lg:mt-[52px]'>
        <BtnYellowPago imagen='./svg/procesos/credit-card.svg' metodo='Credit Card'/>
        <BtnYellowPago imagen='./svg/procesos/paypal.png' metodo='Paypal'/>
        <BtnYellowPago/>
      </div>
      <div className=' w-[333px] lg:w-[824px] mx-auto'>
        <h1 
          className="titulocompra3 text-left
          w-[314px] mb-[23px] 
          lg:w-[836px] lg:mb-[16px] lg:pt-[45px]">
          Información de tarjeta de crédito
        </h1>
        <div 
          className='grid grid-cols-1
          gap-y-[20px]
          lg:gap-y-[38px]'>
          <p>
            <label for="campontarjeta"
            className='classlabel'>
            Número de Tarjeta
            </label> 
            <br/>
            <input type="number" name="tarjeta" id="tarjeta"
              className='border-[2px] rounded-[7px] border-[#1B1713] bg-[white]
              font-[Lato] font-normal text-[#959595]
              text-[16px] w-[333px] h-[48px] pl-[12.93px]
              lg:text-[18px] lg:w-[836px] lg:h-[55px] lg:pl-[17px]'
              placeholder="4557 5563 3456 3509"
            />
          </p>
          <div
            className='grid
            lg:grid-cols-2 lg:gap-x-[100px] gap-y-[20px]'>
            <p>
              <label for="campontitular"
              className='classlabel'>
              Nombre del titular de la tarjeta
              </label> 
              <br/>
              <input type="text" name="titular" id="titular"
                className='border-[2px] rounded-[7px] border-[#1B1713] bg-[white]
                font-[Lato] font-normal text-[#959595]
                text-[16px] w-[333px] h-[48px] pl-[12.93px]
                lg:text-[18px] lg:w-[400px] lg:h-[55px] lg:pl-[17px]'
                placeholder="LIZANDRO LOPEZ"
              />
            </p>
            <div
              className='grid grid-cols-2 gap-[62px] lg:gap-[50px]'>
              <p>
                <label for="campofecha"
                className='classlabel'>
                MM/AA
                </label> 
                <br/>
                <input type="number" name="fecha" id="fecha"
                  className='border-[2px] rounded-[7px] border-[#1B1713] bg-[white] w-[137px]
                  font-[Lato] font-normal text-[#959595]
                  text-[16px] h-[48px] pl-[12.93px]
                  lg:text-[18px] lg:h-[55px] lg:pl-[17px]'
                  placeholder="MM/AA"
                />
              </p>
              <p>
                <label for="campocódigo"
                className='classlabel'>
                CVV
                </label> 
                <br/>
                <input type="number" name="código" id="código"
                  className='border-[2px] rounded-[7px] border-[#1B1713] bg-[white] w-[137px]
                  font-[Lato] font-normal text-[#959595]
                  text-[16px] h-[48px] pl-[12.93px]
                  lg:text-[18px] lg:h-[55px] lg:pl-[17px]'
                  placeholder="CVV"
                />
              </p>
            </div>
          </div>
        </div>
        <form
          className='my-[27px] lg:my-[30px]'>
          <label className="inline-flex items-center">
            <input type="radio" className="form-radio h-6 w-6" name="selection" value="aceptar"/>
            <span 
              className="font-[Lato] font-medium text-[18px] text-[#959595] ml-[10px] lg:ml-[16px]"> 
              Acepto los términos y condiciones
            </span>
          </label>
        </form>
        <div 
          className='grid grid-cols-[131px_211px] gap-[25px] w-[369px] h-[60px] items-center'>
          <p className='font-[Lato] font-medium text-[16px] text-[#1B1713]'>
            Pago 100% seguro
          </p>
          <img src='./svg/Procesos/tarjetas.png'
            className='w-[180px] h-[54ipx] lg:w-[211px] lg:h-[60px]'  
          />
        </div>
        <p
          className='font-[Lato] font-medium text-[18px] text-[#959595] mt-[21px]
          mb-[30px] lg:mb-[60px]'>
          Este certificado garantiza la seguridad de todas tus conexiones mediante cifrado.
        </p>
        <div 
          className='mx-auto w-[160px] lg:w-[295px]'>
          <Link to="/ProcesoCompra5">
            <BtnYellowAmarillo opcion='Pagar'/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProcesoCompra4
