import React from 'react'
import Question1 from '../components/svg/question/Question1'
import Question2 from '../components/svg/question/Question2'
import Question3 from '../components/svg/question/Question3'
import Question4 from '../components/svg/question/Question4'

const Home = () => {
  return (
  <div 
    className=''>
    Home

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