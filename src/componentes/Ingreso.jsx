import { useNavigate } from "react-router-dom"
import '../estilos/Ingreso.css'
export function Ingreso(){
    const navegador=useNavigate()
    return<>
    <div className="form">

        <h1>Iniciar Sesion:</h1>
        <div className="con1">

        <label htmlFor="nombre">Usuario:<input type="text" id="nombre"/></label>
        </div>
        <div className="con1">

        <label htmlFor="clave">Contraseña:<input type="text" id="clave"/></label>
        </div>
        <div className="con1">

        <button className="button-default" onClick={()=>{navegador("/Auditoria")}} id="bt1-ingresar">Ingresar</button>
        </div>
    </div>
        </>
}