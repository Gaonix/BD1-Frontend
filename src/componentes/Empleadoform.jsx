import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import {crearEmpleado} from "../api/EmpleadosApi"
export function Empleadoform(){
    const navegador=useNavigate()
    const {register,handleSubmit,formState:{errors}}=useForm();
    
    const onSubmit = async (data) => {
        console.log(data)
        try {
            await crearEmpleado(data);
            navegador("/Auditoria");
        } catch (error) {
            console.error('Error al crear Empleado:', error);
        }
    };
    return (<>
    <h1>Formulario de Empleado</h1>
     <form onSubmit={handleSubmit(onSubmit)}>

            <div className="pregunta">
            <label className="etiqueta" htmlFor="Nombre">Nombre</label> 
            <input
             type="text"
             id="Nombre"
             placeholder="Nombre"
             {...register("Nombre",{required:true})}
             />
           {errors.Nombre&&<span>El Nombre es obligatorio</span>}
            </div>
            <div className="pregunta">
            <label className="etiqueta" htmlFor="Apellido">Apellido</label>
            <input 
            type="text" 
            id="Apellido" 
            placeholder="Apellido"
            {...register("Apellido",{required:true})}
            />
            {errors.Apellido&&<span>El Apellido es obligatorio</span>}
            </div>
            <div className="pregunta">
            <label className="etiqueta" htmlFor="Cedula">Cedula</label> 
            <input 
            type="number" 
            id="Cedula" 
            placeholder="Cedula"
            {...register("Cedula",{required:true})}
            />
            {errors.Cedula&&<span>La Cedula es obligatoria</span>}
            </div>
            <div className="pregunta">
            <label className="etiqueta" htmlFor="ARL">ARL</label> 
            <input 
            type="text"
            id="ARL"
            placeholder="ARL"
            {...register("ARL",{required:true})}
            />
            {errors.ARL&&<span>La ARL es obligatoria</span>}
            </div>
            
            <button className="button-default">Agregar</button>
            <button className="button-default" onClick={()=>{navegador("/Auditoria")}}>Regresar</button>
        </form>
    </>)
}