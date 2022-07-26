import React from 'react'
import Facebook from './svg/footer/Facebook'
import Instagram from './svg/footer/Instagram'
import LogoFooter from './svg/footer/LogoFooter'
import Twitter from './svg/footer/Twitter'

const Footer = () => {
  return (
    <section className=''>
      <div>
        <div className='mt-[32px] mb-[40px]
          lg:mt-[80px] lg:mb-[56px]'>
          <LogoFooter className='mx-auto' />
        </div>
        
        <div className='flex justify-center mb-[24px]
          lg:mb-[40px]'>
          <div className='grid grid-cols-3 gap-[20px]
            lg:gap-[32px]'>
            <Facebook/>
            <Instagram/>
            <Twitter/>
          </div>
        </div>
        
        <div className='bg-[#1B1713] w-[100%] h-[1px]'></div>

        <div className='mx-auto
          my-[16px] w-[262px]
          lg:my-[28px] lg:w-[364px]'>
          <p className='font-[Poppins] font-medium text-center
            text-[15px] leading-[22px]
            lg:text-[14px] lg:leading-[21px]'>
            MANGIARE © Copyright 2021 Design by Ciclos Studio
          </p>
        </div>
      </div>
    </section>
  )
}

export default Footer