import React from 'react';
import Question1 from '../components/svg/question/Question1';
import Question2 from '../components/svg/question/Question2';
import Question3 from '../components/svg/question/Question3';
import Question4 from '../components/svg/question/Question4';
import BtnRedEmpezar from '../components/buttons/BtnRedEmpezar';
import CardRecetas from '../components/cards/CardRecetas';
import BtnRedMenu from '../components/buttons/BtnRedMenu'

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
            <BtnRedEmpezar/>
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
          className="grid
          grid-cols-2 gap-x-[32px] gap-y-[40px] pb-[34px] h-[490px]
          lg:grid-cols-4 lg:gap-x-[45px]  lg:pb-[64px] lg:h-[454px]" >
          <CardRecetas number="1" plato="./imagenes/recetas/ensalada1.png" nombre="Ensalada de papines con pesto de cilantro"/>
          <CardRecetas className="lg:mt-[181px]" number="2" plato="./imagenes/recetas/ensalada2.png" nombre="Ensalada de papines con pesto de cilantro"/>
          <CardRecetas number="3" plato="./imagenes/recetas/ensalada3.png" nombre="Ensalada de papines con pesto de cilantro"/>
          <CardRecetas number="4" plato="./imagenes/recetas/ensalada4.png" nombre="Ensalada de papines con pesto de cilantro"/>
        </div>
        <BtnRedMenu className="insivible lg:visible"/>
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
  </div>
  )
}

export default Home