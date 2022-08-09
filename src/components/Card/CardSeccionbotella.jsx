import react from "react";

const CardSeccionbotella = (props) => {
    return (
        <div 
            className="w-[253px] h-[365px] mt-[60px] rounded-lg shadow-xl invisible
            lg:visible">
            <h2 
                className="font-[Lato] font-bold text-[24px] text-center mt-[12px]">
                Aceite de sésame
            </h2>
                <img src="imagenes/seccion/botella.png" 
                    className="pt-[9px] mx-auto"/>
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
                </div>    
        </div>
    )
}

export default CardSeccionbotella