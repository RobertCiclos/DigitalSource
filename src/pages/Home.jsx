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
        className='bg-naranjaB '>
        <div 
          className='w-[414px] h-[730px] flex items-center mx-auto
          lg:w-[1440px] lg:h-[645px]'>
          <div 
            className='w-[382px] h-[665px] mx-auto bg-[white] grid  items-center
            lg:w-[1157px] lg:h-[504px] lg:grid-cols-[460px_721px]'>
            <div 
              className='mx-auto'>
              <img 
                src='/imagenes/question.png' 
                className='w-[187px] mx-auto shadow-2xl
                lg:w-[287px]'/>
            </div>
            <div 
              className='
              lg:pb-[40px] lg:ml-[20px] '>
              <h3 
                className='h3 text-center pb-[31px]
                lg:pl-[70px] lg:text-left lg:pb-0'>
                ¿Como llegara tu pedido?
              </h3>
              <div 
                className=' pb-[10px] space-y-[10px] 
                lg:mt-[45px] lg:grid-rows-4 lg:space-y-[35px] lg:pb-[0px]'>
                <div 
                  className='flex items-center gap-[11px]
                  lg:gap-[21px]'>
                  <Question1/>
                  <p 
                    className='w-[313px] font-[Lato] font-normal text-[16px] pl-[4px]
                    lg:w-[555px] lg:text-[18px] lg:pl-0'>
                    Los envíos se entregan los días domingos por parte de nuestro personal.
                  </p>
                </div>
                <div 
                  className='flex items-center gap-[11px]
                  lg:gap-[21px]'>
                  <Question2/>
                  <p 
                    className='w-[313px] font-[Lato] font-normal text-[16px] pl-[4px]
                    lg:w-[555px] lg:text-[18px] lg:pl-0'>
                    Los ingredientes se entregarán pre-cortados según la cantidad de porciones escogidas.
                  </p>  
                </div>
                <div 
                  className='flex items-center gap-[11px]
                  lg:gap-[21px]'>
                  <Question3/>
                  <p 
                    className='w-[313px] font-[Lato] font-normal text-[16px] pl-[4px]
                    lg:w-[555px] lg:text-[18px] lg:pl-0'>
                    Todos los ingredientes enviados estarán 100% frescos.
                  </p>  
                </div >
                <div 
                  className='flex items-center gap-[11px]
                  lg:gap-[21px]'>
                  <Question4/>
                  <p 
                    className='w-[313px] font-[Lato] font-normal text-[16px] pl-[4px]
                    lg:w-[555px] lg:text-[18px] lg:pl-0'>
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