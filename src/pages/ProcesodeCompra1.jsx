import react from "react";
import { Link } from "react-router-dom";
import Btnsiguiente from "../components/buttons/Btnsiguiente";
import CardProcesoCompra from "../components/Card/CardProcesoCompra";
import CardSeccionbotella from "../components/Card/CardSeccionbotella";

const ProcesodeCompra1 = () => {
    const option = 2

    return (
        <section>
            <div 
                className="w-[410px] h-[575px] mx-auto border border-[#C4C4C4] shadow-lg rounded-2xl mt-[20px]
                lg:w-[1108px] lg:h-[1428px] lg:mt-[59px]">
                <h1 
                    className="w-[326px] font-[Poppins] text-[20px] pt-[21px] text-center text-[#1B1713] pb-[22px] border-b-[#C4C4C4] border-b-[1px]
                    lg:text-[36px] lg:pt-[30px] lg:pb-[56px] lg:border-[0px] lg:w-[540px]">
                    Detalle de Compra
                </h1>
                <div 
                    className="">
                    <CardProcesoCompra/>
                    <CardProcesoCompra/>
                    <CardProcesoCompra/>
                    <CardProcesoCompra/>
                </div>
                <div 
                    className="grid grid-rows-2 items-center 
                    lg:grid-cols-2">
                    <div 
                        className="grid grid-cols-2 
                        lg:grid-cols-1">
                        <button 
                            className="flex w-[180px] h-[48px] ml-[24px] mt-[19px] border-[3px] rounded-lg border-amarilloC items-center
                            lg:w-[280px] lg:h-[74px] lg:mt-[37px] lg:ml-[85px] ">
                            <div 
                                className="w-[32px] h-[32px] rounded-full bg-amarilloC ml-[9px]
                                lg:w-[49px] lg:h-[49px] lg:ml-[14px]">
                                <p 
                                    className=" text-[white] text-[30px] mt-[-10px]
                                    lg:text-[40px] lg:mt-[-9px] " >
                                    +
                                </p>  
                            </div>
                            <p 
                                className="text-amarilloC font-[Poppins] font-semibold text-[12px] ml-[10px]
                                lg:ml-[16px] lg:text-[20px] ">
                                    Añadir otra receta
                                </p>
                        </button>
                        <p 
                            className="font-semibold font-[Lato] text-[14px] pl-[35px] pt-[34px]
                            lg:text-[22px] lg:pt-[54px] lg:pl-[85px]">
                            Productos totales: 
                            <span 
                                className="pl-[7px]
                                lg:pl-[17px]">4</span> 
                        </p>
                    </div>   
                    <div 
                        className="">
                        <p 
                            className="font-[Lato] font-bold text-[22px] mt-[27px] pl-[182px]
                            lg:text-[36px] lg:pt-[120px] lg:pl-[80px]">
                            Subtotal: 
                                <span 
                                className="
                                lg:pl-[83px]">$120.00</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="">
                <div 
                    className=" mx-auto mt-[31px] 
                    lg:w-[1214px] lg:h-[461px] lg:mt-[66px] ">
                    <h1 
                        className="font-[Poppins] text-[#1B1713] font-bold text-[20px] text-center 
                        lg:text-[36px] ">
                        ¿Se te antoja algo mas?</h1>
                    <div 
                        className="grid mx-auto grid-cols-1
                        lg:grid-cols-4  lg:px-[50px]">
                           <CardSeccionbotella/>
                           <CardSeccionbotella/>
                           <CardSeccionbotella/>
                           <div 
                            className="w-[253px] h-[365px] mt-[60px] rounded-lg shadow-xl invisible
                            lg:visible">
                               <img src="svg/seccion/carddireccion.svg" 
                                className="mt-[20px] pl-[28px]"/>
                               <h2 
                                    className="font-[Lato] font-bold text-[24px] text-center mt-[8px]">
                                    Aceite de sésame
                                </h2>
                                <ul className="list-disc mt-[13px] text-[16px] font-[Lato] font-semibold space-y-[11px] ml-[60px]">
                                    <li>Composicion: 
                                        <span 
                                            className="font-normal pl-[13px] text-[14px] font-[Lato]">
                                                Vegetal</span>
                                    </li>
                                    <li>Peso neto: 
                                        <span 
                                            className="font-normal pl-[53px] text-[14px] font-[Lato]">
                                            400</span>
                                    </li>
                                    <li>Variedad:
                                        <span 
                                            className="font-normal pl-[31px] text-[14px] font-[Lato]">
                                            Premium</span>
                                    </li>
                                    <li>Presentacion:
                                        <span 
                                            className="font-normal pl-[13px] text-[14px] font-[Lato]">
                                            Botella</span>
                                    </li>
                                    <li>Ingredientes:</li>
                                </ul>
                                <p className="pt-[14px] text-[14px] font-normal text-center ml-[-25px]">Limón, cilantro, cebolla,</p>
                                <button 
                                    className="w-[188px] h-[42px] bg-naranjaC rounded-lg  mt-[15px] ml-[32px] ">
                                    <h4 
                                        className="text-center text-[16px] text-[white] font-[Poppins] font-bold">
                                        Añadir al carrito
                                    </h4>
                                </button>
                                <div 
                                    className="absolute mx-auto w-[14px] h-[27px]
                                    lg:ml-[10px] lg:w-[21px] lg:h-[39px]">
                                    <img src="svg/seccion/direccional1.svg" 
                                        className="absolute mx-auto 
                                        lg:ml-[-890px] lg:mt-[-175px] lg:w-[21px] lg:h-[39px]"/>
                                </div>
                                <div 
                                    className="absolute ml-[20px] mx-auto w-[21px] h-[39px]">
                                    <img src="svg/seccion/direccional2.svg" 
                                        className="absolute ml-[260px] mt-[-170px] mx-auto w-[21px] h-[39px]"/>
                                </div>
                           </div>
                           
                           <div 
                                className="rounded-lg shadow-2xl visible mx-auto w-[253px] h-[365px] mt-[-1670px]
                                lg:invisible">
                                <h2 
                                    className="font-[Lato] font-bold text-center text-[22px] mt-[12px]">
                                    Aceite de sésame
                                </h2>
                                    <img src="imagenes/seccion/botella.png" 
                                        className="mx-auto pt-[9px]"/>
                                    <img src="svg/seccion/Precio.svg" 
                                        className="pt-[21px] mx-auto"/>
                                    <div className="grid grid-cols-2 ">
                                        <h3 className="font-[Lato] font-bold text-[21px] pt-[27px] mx-auto">
                                            Cantidad
                                        </h3>
                                        <img src="svg/seccion/contador2.svg " className="pt-[19px] items-center ml-[-4px]"/>
                                        <button 
                                            className="w-[154px] h-[42px] bg-naranjaC rounded-lg ml-[16px] mt-[15px] ">
                                            <h4 
                                                className="text-center text-[16px] text-[white] font-[Poppins] font-bold">
                                                Ver detalle
                                            </h4>
                                        </button>
                                        <button 
                                            className="w-[51px] h-[42px] border ml-[60px] mt-[15px] border-naranjaC rounded-md ">
                                            <img src="svg/seccion/carrito.svg" className="mx-auto"/>
                                        </button>
                                        <div 
                                            className="absolute mx-auto w-[14px] h-[27px] 
                                            lg:ml-[10px] lg:w-[21px] lg:h-[39px]">
                                            <img src="svg/seccion/direccional1.svg" 
                                                className="absolute mx-auto ml-[-50px] mt-[-70px]
                                                lg:ml-[-890px] lg:mt-[-175px] lg:w-[21px] lg:h-[39px]"/>
                                        </div>
                                        <div 
                                            className="absolute mx-auto w-[14px] h-[27px] 
                                            lg:ml-[20px] lg:w-[21px] lg:h-[39px]">
                                            <img src="svg/seccion/direccional2.svg" 
                                                className="absolute  mx-auto ml-[290px] mt-[-70px]
                                                lg:ml-[260px] lg:mt-[-170px] lg:w-[21px] lg:h-[39px]"/>
                                        </div>
                                    </div>    
                            </div>
                    </div>
                </div>
                <div 
                    className="w-[240px] h-[48px] mx-auto pb-[70px] mt-[-1260px] 
                    lg:w-[295px] lg:h-[70px] lg:pb-[250px] lg:mt-0">
                    <Link to="/ProcesoCompra2-2" 
                        className="w-[240px] h-[48px] mx-auto mt-[-1265px] 
                        lg:w-[188px] lg:h-[42px] lg:pb-[70px] lg:mt-[0px]">
                        <Btnsiguiente/>
                    </Link>
                </div>
            </div>
        </section>

        
    )
}
export default ProcesodeCompra1