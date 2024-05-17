import { Navegacion } from "./Navegacion";
import { useEffect, useState } from "react";
import { Pelicula } from "./Pelicula";
import { PeliculaItem } from "./PeliculaItem";
import { useNavigate } from 'react-router-dom'
import '../estilos/Cartelera.css'
import { obtenerPeliculas } from "../api/peliculasApi";
export function Cartelera(){
    const[Admin,cambiarEstado]=useState(true);
    const navigate=useNavigate(0)
    const titulo="Vista administrador";
    const titulo2="Vista  usuario";
    const[peliculas,setpeliculas]=useState([])
    useEffect(()=>{
        async function obtenerinfo (){
            const res=  await obtenerPeliculas();
            setpeliculas(res.data)
            console.log(res.data);
        }
        obtenerinfo();
        
    },[]);
  
    return<>
        <Navegacion></Navegacion>
        <h1>CARTELERA DE PELICULAS:</h1>  
        <div className="botones">
        <button onClick={(e)=>{navigate(`/formulario`)}} className="button-default bt-opc">Agregar</button>
        <button className="button-default bt-opc" onClick={(e)=>{cambiarEstado(!Admin)}}>{Admin ?titulo:titulo2}</button>
        </div>

        {Admin?(<div className="cartelera-peliculas">
        {peliculas.map((pelicula, index) => (
     
                    <Pelicula key={index} pelicula={pelicula} />
                ))}
        </div>):
        (   
            <div className="contenedor">

            <table>
               <thead>

                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>FECHA</th>
                    <th>GENEROS</th>
                    <th>GESTION</th>
                </tr>
               </thead>
                <tbody>
                {peliculas.map((pelicula, index) => (
                    <PeliculaItem key={index} pelicula={pelicula} id={index} />
                    
                ))}
                </tbody>
            </table>
        </div>
        )}
    </>
}