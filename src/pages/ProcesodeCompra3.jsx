import react from "react";
import { Link } from 'react-router-dom'
import BtnYellowAmarillo from '../components/buttons/BtnYellowAmarillo'
import BtnYellowBlanco from '../components/buttons/BtnYellowBlanco'
const ProcesodeCompra3 = () => {
    return(
        <section>
            <div 
                className="w-[350px] h-[500px] mt-[24px] rounded-lg border-[#FFFFFF] shadow-xl mx-auto
                lg:w-[1020px] lg:h-[545px] lg:mt-[54px]">
                <h1 
                    className="titulocompra3 pt-[40px] text-center w-[310px]
                    lg:pt-[34px] lg:w-[465px]">
                    Confirmacion de compra
                </h1>
                <div 
                    className="grid grid-cols-[140px_0px_100px]
                    lg:grid-cols-3">
                    <h3 
                        className="subcompra3 pl-[30px] pt-[130px]
                        lg:pt-[80px] lg:pl-[156px] ">
                        Sub Total
                    </h3>
                    <div 
                        className="invisible
                        lg:pt-[75px] lg:w-[467px] lg:pl-[70px] lg:visible">
                        <p 
                            className="parrafocompra3">
                            3 recetas 
                        </p>
                        <p 
                            className="parrafocompra3">
                            Acompañamiento “mayonesa vegana”: $40
                        </p>
                    </div>
                    <p 
                        className="numerocompra3 pt-[125px]  pl-[80px]
                        lg:pt-[86px] lg:pl-[150px]">
                        $120.00
                    </p>
                </div>
                <div 
                    className="grid grid-cols-[200px_0px_180px]
                    lg:grid-cols-3">
                    <h3 
                        className="subcompra3 pl-[30px] 
                        lg:pt-[65px] lg:pl-[156px]">
                        Costo de envío
                        <p 
                            className="text-[15px] font-light font-[Lato] visible
                            lg:invisible">
                            Envió a la provincia de 
                        </p>
                    </h3>
                    <p 
                        className="parrafocompra3 invisible
                        lg:pt-[65px] lg:pl-[70px] lg:visible">
                        Envió a la provincia de
                    </p>
                    <p 
                        className="numerocompra3 pl-[35px] pt-[8px]
                        lg:pt-[55px] lg:pl-[150px]">
                        $10.00
                    </p>
                </div>
                <div className="grid grid-cols-2 mx-auto border-t w-[310px] mt-[-70px]
                lg:mt-[45px] lg:w-[847px]">
                    <h2 
                        className="titulo2 pt-[17px]
                        lg:pt-[22px] lg:ml-[-145px]">
                        Costo total</h2>
                    <p 
                        className="font-[Poppins] pt-[17px] ml-[42px] font-semibold text-[#7BB037] text-[25px]
                        lg:ml-[300px] lg:pt-[22px] ">
                        $130.00
                    </p>
                </div>
                <p 
                    className="parrafocompra3 pt-[25px] ml-[30px] w-[274px]
                    lg:pt-[35px] lg:w-[644px] lg:ml-[150px]">
                    *Pedidos llegan los Domingos entre las 7 am - 9 pm
                </p>
                <div 
                    className="absolute w-[250px] top-1 mt-[190px] ml-[72px] h-[80px] 
                    text-[20px] font-light font-[Lato] visible
                    lg:invisible">
                    <ul 
                        className="list-disc">
                        <li>3 recetas</li>
                        <li>Acompañamiento “mayonesa vegana”: $40</li>
                    </ul>
                </div>
            </div>
            <div
                className='grid grid-cols-2 mx-auto
                gap-[32px] mb-[40px] w-[352px] mt-[50px] 
                lg:gap-[100px] lg:mb-[122px] lg:w-[690px] lg:mt-[95px] '>
                <Link to="/ProcesoCompra2-2">
                    <BtnYellowBlanco opcion='Cancelar'/>
                </Link>
                <Link to="/ProcesoCompra4">
                    <BtnYellowAmarillo opcion='Confirmar'/>
                </Link>
            </div>
        </section>
     )
}
export default ProcesodeCompra3
