import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { ObtenerCargos ,ObtenerDepartamento,ObtenerEmpleado, CrearNomina} from "../api/EmpleadosApi";
import { useEffect, useState } from "react";
export function FormNomina(){
    const [cargo,setcargo]=useState([])
    const [departamento,setdepartamento]=useState([])
    const [Empleado,setempleados]=useState([])
    const navegacion = useNavigate();
    
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    useEffect(()=>{
        async function obtenerC(){
                const res= await ObtenerCargos();
                setcargo(res.data)
                console.log(res.data)
        }
        obtenerC();
        async function obtenerD(){
                const res1=await ObtenerDepartamento();
                setdepartamento(res1.data);
                console.log(res1.data)
        }
        obtenerD();
        async function obtenerE(){
                const res2=await ObtenerEmpleado();
                setempleados(res2.data);
                console.log(res2.data)
        }
        obtenerE();
    },[]);
    
    const onSubmit = async (data) => {
        console.log(data)
        try {
           await CrearNomina(data);
            navegacion("/Auditoria");
            console.log(data)
        } catch (error) {
            console.error('Error al crear nomina:', error);
        }
    };

return (
        <>
        <h1>Formulario Nomina:</h1>
        <form onSubmit={handleSubmit(onSubmit)} >
       
        <div className="pregunta">
                <label htmlFor="Sueldo" className='etiqueta'>Sueldo:</label>
                <input
                        type="number"
                        id="Sueldo"
                        placeholder='sueldo'
                        {...register("Sueldo",{required:true})}
                        />
                {errors.Sueldo&&<span>el Sueldo es nesesario</span>}
        </div>
        <div className="pregunta">
                <label htmlFor="FechaIngreso" className='etiqueta'>FechaIngreso:</label>
                <input
                        type="date"
                        id="FechaIngreso"
                        
                        {...register("FechaIngreso",{required:true})}
                />
                {errors.FechaIngreso&&<span>la FechaIngreso es nesesaria</span>}
        </div>
        
        <div className="pregunta">
                <label htmlFor="EPS" className='etiqueta'>EPS:</label>
                <input
                        type="text"
                        id="EPS"
                        placeholder='identificador de nomina'
                        {...register("EPS",{required:true})}
                />
                {errors.EPS&&<span>la EPS es nesesaria</span>}
        </div>
        <div className="pregunta">
                <label htmlFor="FondoPension" className='etiqueta'>FondoPension:</label>
                <input
                        type="text"
                        id="FondoPension"
                        placeholder='Pension'
                        {...register("FondoPension",{required:true})}
                />
                {errors.FondoPension&&<span>la FondoPension es nesesaria</span>}
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
        
        
        
        <div className="pregunta">
                <label htmlFor="Cargo" className='etiqueta'>Cargo:</label>
                <select name="Cargo" id="Cargo" {...register("Cargo", { required: true })}>
        {cargo.map((Idcargo) => (
                <option key={Idcargo.id} value={Idcargo.id}>{Idcargo.NombreCargo}</option>
        ))}
    </select>
                {errors.Cargo&&<span>la Cargo es nesesaria</span>}
        </div>



        <div className="pregunta">
                <label htmlFor="Departamento" className='etiqueta'>Departamento:</label>
                <select name="Departamento" id="Departamento" {...register("Departamento", { required: true })}>
        {departamento.map((iddep) => (
                <option key={iddep.id} value={iddep.id}>{iddep.NombreDepartamento}</option>
        ))}
    </select>
                {errors.Cargo&&<span>la Cargo es nesesaria</span>}
        </div>
        
        <button className='button-default button-form'>Registrar</button>
        </form>
        <button className='button-default button-form' onClick={()=>{navegacion("/Auditoria")}}>Regresar</button>
        </>)
}