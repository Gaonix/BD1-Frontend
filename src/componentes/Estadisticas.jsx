import { useState } from "react";
import { Navegacion } from "./Navegacion";
import Charts from "./Charts";
import '../estilos/graficos.css'
export function Estadisticas(){
const [grafico,setgrafico]=useState(1)
    return <>
    <Navegacion></Navegacion>
    <div className="botton-conteiner">
    <button className="button-default" onClick={()=>{setgrafico(1)}}>grafico 1</button>
    <button className="button-default" onClick={()=>{setgrafico(2)}}>grafico 2</button>
    </div>
    <div>
   <Charts data={grafico}></Charts>
    </div>
    </>
}