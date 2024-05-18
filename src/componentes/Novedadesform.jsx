import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { CrearNovedades ,ObtenerEmpleado} from "../api/EmpleadosApi";
import { useEffect, useState } from "react";
export function Novedadesform(){
    const navegacion = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    
    const [Empleado,setempleados]=useState([])
    useEffect(()=>{
        async function obtenerE(){
                const res2=await ObtenerEmpleado();
                setempleados(res2.data.results);
                console.log(res2.data)
        }
        obtenerE();
    },[]);
    const onSubmit = async (data) => {
        console.log(data)
        try {
           await CrearNovedades(data);
            navegacion("/Auditoria");
            console.log(data)
        } catch (error) {
            console.error('Error al crear novedad:', error);
        }
    };

    return<>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="pregunta">
                        <label htmlFor="Descripcion" className='etiqueta'>Nombre:</label>
                        <input
                            type="text"
                            id="Descripcion"
                            placeholder='Nombre de la película'
                            {...register('Descripcion', { required: true })}
                    />
                    {errors.Descripcion && <span>¡La DESCRIPCION ES OBLIGATORIO!</span>}
                </div>
            <div className="pregunta">
                        <label htmlFor="Fecha" className='etiqueta'>Fecha:</label>
                        <input
                            type="date"
                            id="Fecha"
                            placeholder='Nombre de la película'
                            {...register('Fecha', { required: true })}
                    />
                    {errors.Fecha && <span>¡LA FECHA ES OBLIGATORIA!</span>}
                </div>
                <div className="pregunta">
                <label htmlFor="Empleado" className='etiqueta'>Empleado:</label>
               <select name="Empleado" id="Empleado"{...register("Empleado",{required:true})}>
                {Empleado.map((idEmpl)=>(
                        <option key={idEmpl.EmpleadoID} value={idEmpl.EmpleadoID}> {idEmpl.Apellido} {idEmpl.Nombre}</option>
                ))}

               </select>
                {errors.Empleado&&<span>la Empleado es nesesaria</span>}
        </div>
                    <button className="button-default">Agregar</button>


    </form>
    <button className="button-default">Regresar</button>
     
    </>
}