import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { AgregarPeliculaGeneros,obtenerPeliculas} from "../api/peliculasApi";
import { useEffect, useState } from "react";
import { obtenerGeneros } from '../api/peliculasApi';
export function Generos(){
    const[usuario,setusuario]=useState([])
    const [generos,setgeneros]=useState([])
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    useEffect(()=>{
        async function obtenerg(){
                const res= await obtenerGeneros();
                setgeneros(res.data)
                console.log(res.data)
        }
        obtenerg();
        async function obtenerC(){
                const res= await obtenerPeliculas();
                setusuario(res.data)
                console.log(res.data)
        }
        obtenerC();
    },[])
    const onSubmit = async (data) => {
        console.log(data)
        try {
           await AgregarPeliculaGeneros(data);
            navegacion("/Auditoria");
            console.log(data)
        } catch (error) {
            console.error('Error al crear Auditoria:', error);
        }
    };

    return (<>
    <form onSubmit={handleSubmit(onSubmit)}>
                <div className="pregunta">
                    <label htmlFor="pelicula" className='etiqueta'>pelicula:</label>
                    <select name="pelicula" id="pelicula"{...register("pelicula",{required:true})}>
                    {usuario.length > 0 && (
        <option key={usuario[usuario.length - 1].pelicula_id} value={usuario[usuario.length - 1].pelicula_id}>
            {usuario[usuario.length - 1].titulo}
        </option>
    )}

               </select>
                    </div>
               <div className="pregunta">
                    <label htmlFor="genero" className='etiqueta'>genero:</label>
               <select name="genero" id="genero"{...register("genero",{required:true})}>
                {generos.map((idEmpl)=>(
                    <option key={idEmpl.id} value={idEmpl.id}> {idEmpl.nombre_genero}</option>
                ))}

               </select>
                {errors.generos&&<span>la generos es nesesaria</span>}
        </div>
        <button>Agregar</button>
                </form>
            </>)
}