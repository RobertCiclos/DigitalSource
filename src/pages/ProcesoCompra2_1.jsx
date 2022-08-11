import React from 'react'
import BtnGreenNo from '../components/buttons/BtnGreenNo'
import BtnGreenSi from '../components/buttons/BtnGreenSi'
import BtnYellowAmarillo from '../components/buttons/BtnYellowAmarillo'
import BtnYellowBlanco from '../components/buttons/BtnYellowBlanco'

const ProcesoCompra2_1 = (props) => {
  return (
    <div>
        <div
            className='mx-auto items-center
            w-[414px] pt-[30px]
            lg:w-[1440px] lg:pt-[68px]'>
              <div
                className='bg-[white] shadow-lg mx-auto rounded-[10px]
                w-[374px] pt-[21px] py-[30px] pb-[31px] mb-[30px]
                lg:w-[1020px] lg:pt-[47px] lg:py-[165px] lg:pb-[62px] lg:mb-[82px]'>
                  <p className='subtitulocompra'>
                    ¿Desea enviarlo como regalo?
                  </p>
                  <div 
                    className='grid grid-cols-2 mx-auto
                    gap-[26px] w-[314px]
                    lg:gap-[100px] lg:w-[690px]'>
                    <BtnGreenNo className='text-[white] bg-[#7BB037]'/>
                    <BtnGreenSi className='text-[#7BB037]'/>
                  </div>
              </div>
              <div
                className='bg-[white] shadow-lg mx-auto rounded-[10px]
                w-[374px] pt-[23px] py-[32px] pb-[38px] mb-[39px]
                lg:w-[1020px] lg:pt-[33px] lg:py-[60px] lg:pb-[62px] lg:mb-[65px]'>
                <p className='subtitulocompra'>
                  Datos personales
                </p>
                <div 
                  className='grid lg:gap-x-[100px] mx-auto
                  grid-cols-1 w-[310px] gap-y-[20px] 
                  lg:grid-cols-2 lg:w-[900px] lg:gap-y-[37px]'>
                  <p>
                    <label for="camponombre"
                      className='classlabel'>
                      Nombres
                    </label> 
                    <br/>
                    <input type="text" name="nombres" id="nombres"
                      className='classinput'
                      placeholder="Ej: Carlos Andre"
                    />
                  </p>
                  <p>
                    <label for="campoapellido"
                      className='classlabel'>
                      Apellidos
                    </label> 
                    <br/>
                    <input type="text" name="apellidos" id="apellidos"
                      className='classinput'
                      placeholder="Ej: Hernandez Gonzales"
                    />
                  </p>
                  <p>
                    <label for="campotelefono"
                      className='classlabel'>
                      Telefono
                    </label> 
                    <br/>
                    <input type="tel" name="telefono" id="telefono"
                      className='classinput'
                      placeholder="Ej: +507 6709 2134"
                    />
                  </p>
                  <p>
                    <label for="campociudad"
                      className='classlabel'>
                      Ciudad
                    </label> 
                    <br/>
                    <input type="text" name="ciudad" id="ciudad"
                      className='classinput'
                      placeholder="Ej: Carlos Andre"
                    />
                  </p>
                  <p>
                    <label for="campocorregimiento"
                      className='classlabel'>
                      Corregimiento
                    </label> 
                    <br/>
                    <input type="text" name="corregimiento" id="corregimiento"
                      className='classinput'
                      placeholder="Ej: Carlos Andre"
                    />
                  </p>
                  <p>
                    <label for="campocalle"
                      className='classlabel'>
                      Calle
                    </label> 
                    <br/>
                    <input type="text" name="calle" id="calle"
                      className='classinput'
                      placeholder="Ej: 25"
                    />
                  </p>
                </div>
              </div>
              <div
                className='grid grid-cols-2 mx-auto
                gap-[32px] mb-[40px] w-[352px]
                lg:gap-[100px] lg:mb-[62px] lg:w-[690px]'>
                <BtnYellowBlanco opcion='Anterior'/>
                <BtnYellowAmarillo opcion='Siguiente'/>
              </div>
        </div>
    </div>
  )
}

export default ProcesoCompra2_1