import React from 'react'
import BtnRedEmpezar from '../components/buttons/BtnRedEmpezar'
import Productos from '../components/svg/why/Productos'
import Why from '../components/Card/Why'
import Question from '../components/Question/Question'
import BtnBrownSuscribirme from '../components/buttons/BtnBrownSuscribirme'
import CardRecetas from '../components/Card/CardRecetas'
import BtnRedMenu from '../components/buttons/BtnRedMenu'
import CardComida from '../components/Card/CardComidad'

const Home = () => {
  return (
  <div 
    className=''>
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
        className='mx-auto
        w-[414px] pt-[38px] pb-[90px] px-[19px]
        lg:w-[1440px] lg:pt-[49px] lg:pb-[30px] lg:px-[104px]'>
        <h2
          className='text-[##1B1713] mb-[30px] lg:mb-[72px]'>
          Recetas de la semana
        </h2>
        <div   
          className="grid mx-auto
          grid-cols-2 mb-[30px] gap-x-[32px] gap-y-[25px]
          lg:grid-cols-4 lg:mb-[64px] lg:gap-x-[45px] lg:w-[1215px] lg:h-[470px]" >
          <div className="lg:grid lg:grid-rows-[181px_289px_165px]">
            <CardRecetas className="" number="1" plato="./imagenes/recetas/ensalada1.png" nombre="Ensalada de papines con pesto de cilantro"/>
          </div>
            <CardRecetas className="" number="2" plato="./imagenes/recetas/ensalada2.png" nombre="Ensalada de papines con pesto de cilantro"/>
          <div className="lg:grid lg:grid-rows-[181px_289px_165px]">
            <CardRecetas className="" number="3" plato="./imagenes/recetas/ensalada3.png" nombre="Ensalada de papines con pesto de cilantro"/>
          </div>
            <CardRecetas className=""number="4" plato="./imagenes/recetas/ensalada4.png" nombre="Ensalada de papines con pesto de cilantro"/>
        </div>
        <BtnRedMenu className="insivible lg:visible"/>
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
          <Why imagen="./svg/Why/Svg-Productos.svg"    texto="Productos Frescos" subtitulo="Productos 100% frescos"/>
          <Why imagen="./svg/Why/Svg-Preparacion.svg"  texto="Preparación fácil" subtitulo="Recetas fáciles de preparar"/>
          <Why imagen="./svg/Why/Svg-Nuevas.svg"       texto="Nuevas recetas" subtitulo="Recetas nuevas cada semana"/>
          <Why imagen="./svg/Why/Svg-Ahorra.svg"       texto="Ahorra tiempo" subtitulo="Reduce el tiempo de cocinar "/>
          
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
                <Question imagen="/svg/Question/SVG-1Question.svg"/>
                <p 
                  className='parrafo'>
                  Los envíos se entregan los días domingos por parte de nuestro personal.
                </p>
              </div>
              <div 
                className='flex items-center gap-[11px]
                aux:gap-[21px]'>
                <Question imagen="/svg/Question/SVG-2Question.svg"/>
                <p 
                  className='parrafo'>
                  Los ingredientes se entregarán pre-cortados según la cantidad de porciones escogidas.
                </p>  
              </div>
              <div 
                className='flex items-center gap-[11px]
                aux:gap-[21px]'>
                <Question imagen="/svg/Question/SVG-3Question.svg"/>
                <p 
                  className='parrafo'>
                  Todos los ingredientes enviados estarán 100% frescos.
                </p>  
              </div >
              <div 
                className='flex items-center gap-[11px]
                aux:gap-[21px]'>
                <Question imagen="/svg/Question/SVG-4Question.svg"/>
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
        className="mx-auto shadow-md w-[414px] h-[153px] flex
        lg:w-[1460px] lg:h-[330px]">
          
          <img 
            src="./imagenes/suscripcion/decoracion.png"
            className='w-[86px] h-[88px]
            lg:w-[310px] lg:h-[330px]'/>
          <div 
            className='grid grid-cols-1
            lg:grid-cols-2'>
            <div 
              className='w-[368px] h-[45px] mt-[20px] 
              lg:w-[518px] lg:h-[106px] lg:mt-[75px] lg:text-left '>
              <h4 
                className='h4'>
                Suscripción al catálogo semanal
              </h4>
              <p 
                className='text-[14px] font-[Lato] text-[#1B1713] pt-[4px]
                lg:text-[18px] lg:pt-[52px]'>
                Suscríbete y recibirás cada semana...
              </p>
            </div>
            <div 
              className='w-[420px] h-[42px] grid grid-cols-2 px-[30px]
              lg:mt-[152px]'>
              <input 
                className='w-[146px] h-[40px] ml-[-20px] bg-gray-50 border border-gray-300  rounded-lg px-4 py-2
                lg:w-[289px] lg:h-[40px] lg:ml-[-60px]' 
                placeholder='Escribe tu correo electronico'>
              </input>
              <div 
                className='ml-[-70px] pl-[0px]
                lg:pl-[40px] lg:ml-[0px]'>
                <BtnBrownSuscribirme/>
              </div>
            </div>
          </div>
            <img 
              src="./imagenes/suscripcion/decoracionb.png"
              className='w-[86px] h-[93px] mt-[44px]
              lg:w-[310px] lg:h-[330px] lg:mt-[0px]'/>
      </div>
    </section>
  </div>
  )
}

export default Home