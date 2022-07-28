import React from 'react'
import Question1 from '../components/svg/question/Question1'
import Question2 from '../components/svg/question/Question2'
import Question3 from '../components/svg/question/Question3'
import Question4 from '../components/svg/question/Question4'
import BtnRedEmpezar from '../components/buttons/BtnRedEmpezar'
import Productos from '../components/svg/why/Productos'
import Why from '../components/Card/Why'
const Home = () => {
  return (
  <div 
    className=''>
    Home
    <section>
        <div 
          className='mx-auto relative
          w-[414px] h-[284px]
          md:w-[768px] md:h-[380px]
          lg:w-[1440px] lg:h-[635px]'>
          <img src="./imagenes/fondohero.png"
            className='w-[414px] h-[284px] mx-auto
            md:w-[768px] md:h-[380px]
            lg:w-[1440px] lg:h-[635px]'/>
          <h1
            className='absolute top-[65px] right-[78.15px]
            md:top-[90px] md:right-[159px]
            lg:top-[142px] lg:right-[255px]'>
            ¡A mangiare con nuestras recetas! 
          </h1>
          <div 
            className="absolute top-[159px] right-[112.5px]
            md:top-[245px] md:right-[289.5px]
            lg:top-[387px] lg:right-[550px]">
            <BtnRedEmpezar />
          </div>
        </div>
    </section>

    <section>
      <div 
        className='w-[414px] h-[527px] mx-auto mb-[30px]
        lgaux:w-[1106px] lg:h-[373px] lg:mb-[147px]'>
        <h2 
          className='h2 text-[#1B1713] mt-[24px]
          lg:mt-[46px]'>
          ¿Por qué Mangiare?
        </h2>
        <div 
          className='grid grid-cols-2 gap-[24px] px-[25px] 
          lg:grid-cols-[245px_245px_245px_245px] lg:gap-[42px]'>
          <Why item={1} texto="Productos Frescos" subtitulo="Productos 100% frescos"/>
          <Why item={2} texto="Preparación fácil" subtitulo="Recetas fáciles de preparar"/>
          <Why item={3} texto="Nuevas recetas" subtitulo="Recetas nuevas cada semana"/>
          <Why item={4} texto="Ahorra tiempo" subtitulo="Reduce el tiempo de cocinar "/>
          
        </div>
      </div>
    </section>
        
    <section 
      className='w-full h-[730px] flex items-center mx-auto bg-naranjaB 
      aux:h-[645px]'>
      <div 
        className='w-[414px] flex items-center justify-center px-[16px] mx-auto
        2xl:w-[1440px] aux:px-[135px]'>
        <div 
          className='w-[382px] px-[13px] h-[665px] mx-auto bg-[white] grid  items-center
          aux:w-[1157px] aux:h-[504px] aux:grid-cols-[460px_721px] aux:px-[0px] 
          md:w-[800px]'>
          <div 
            className='mx-auto'>
            <img 
              src='/imagenes/question.png' 
              className='w-[187px] mx-auto shadow-2xl
              aux:w-[287px]'/>
          </div>
          <div 
            className='
            aux:pb-[40px]  '>
            <h3 
              className='h3 text-center pb-[31px]
              aux:pl-[70px] aux:text-left aux:pb-0'>
              ¿Como llegara tu pedido?
            </h3>
            <div 
              className=' pb-[10px] space-y-[10px] 
              aux:mt-[45px] aux:grid-rows-4 aux:space-y-[35px] aux:pb-[0px]'>
              <div 
                className='flex items-center gap-[11px]
                aux:gap-[21px] aux:'>
                <Question1/>
                <p 
                  className='parrafo'>
                  Los envíos se entregan los días domingos por parte de nuestro personal.
                </p>
              </div>
              <div 
                className='flex items-center gap-[11px]
                aux:gap-[21px]'>
                <Question2/>
                <p 
                  className='parrafo'>
                  Los ingredientes se entregarán pre-cortados según la cantidad de porciones escogidas.
                </p>  
              </div>
              <div 
                className='flex items-center gap-[11px]
                aux:gap-[21px]'>
                <Question3/>
                <p 
                  className='parrafo'>
                  Todos los ingredientes enviados estarán 100% frescos.
                </p>  
              </div >
              <div 
                className='flex items-center gap-[11px]
                aux:gap-[21px]'>
                <Question4/>
                <p 
                  className='parrafo'>
                  Los envíos se entregan los días domingos por parte de nuestro personal.
                </p>  
              </div>
            </div>          
          </div>
        </div>
      </div>
    
    
    </section>

    <section>
      <div 
        className="w-[1440px] h-[330px] mx-auto">
        <div 
          className='grid grid-cols-3'>
          <div 
            className='w-[310px] h-[330px]'> 
            <img src="/imagenes/suscripcion/decoracion.png"/>
          </div>
          <div 
            className='w-[820px]  ml-[-155px]'>
            <h4 className='h4 pt-[75px] '>
            Suscripción al catálogo semanal
            </h4>
            <div className=''>
              <div>
              <p 
                className='text-[18px] font-[Lato] text-[#1B1713] pt-[52px]'>
                Suscríbete y recibirás cada semana...
              </p>
              </div>
              <div>

              </div>
            </div>
          </div>
          <div
            className='w-[310px] h-[330px] mx-[200px]'> 
            <img src="/imagenes/suscripcion/decoracionb.png"/>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Home