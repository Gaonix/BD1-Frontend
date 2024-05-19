import { Navegacion } from "./Navegacion";
import { useEffect, useState } from "react";
import { Pelicula } from "./Pelicula";
import { PeliculaItem } from "./PeliculaItem";
import { useNavigate } from 'react-router-dom'
import '../estilos/Cartelera.css'
import { obtenerPeliculas } from "../api/peliculasApi";

export function Cartelera(){
    const [Admin, cambiarEstado] = useState(true);
    const [peliculas, setPeliculas] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [ultimaPagina, setUltimaPagina] = useState(1);
    const navigate = useNavigate();
    const titulo = "Vista administrador";
    const titulo2 = "Vista  usuario";
    const [contenido, setContenido] = useState([]); 

    useEffect(() => {
        async function obtenerInfo() {
            try {
                const res = await obtenerPeliculas(pagina);
                if (Array.isArray(res.data.results)) {
                    setPeliculas(res.data.results);
                    setContenido(res.data.results); 
                    console.log(res.data.results)
                    setUltimaPagina((Math.ceil(10686 / 48)));
                } else {
                    console.error('La respuesta de obtenerPeliculas no es un array:', res.data);
                }
            } catch (error) {
                console.error('Error al obtener películas:', error);
            }
        }
        
        obtenerInfo();
        
    }, [pagina]);
  
    return (
        <>
            <Navegacion />
            <h1>CARTELERA DE PELICULAS:</h1>  
            <div className="botones">
                <button onClick={() => navigate(`/formulario`)} className="button-default bt-opc">Agregar</button>
                <button className="button-default bt-opc" onClick={() => cambiarEstado(!Admin)}>{Admin ? titulo : titulo2}</button>
                <button className="button-default bt-opc" onClick={() => setPagina(pagina + 1)}>Siguiente</button>
                <button className="button-default bt-opc" onClick={() => setPagina(pagina - 1)} disabled={pagina === 1}>Anterior</button>
                <button className="button-default bt-opc" onClick={() => setPagina(ultimaPagina )}>ultima</button>
            </div>

            {Admin ? (
                <div className="cartelera-peliculas">
                    {contenido.map((pelicula, index) => (
                        <Pelicula key={index} pelicula={pelicula} />
                    ))}
                </div>
            ) : (   
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
                            {contenido.map((pelicula, index) => (
                                <PeliculaItem key={index} pelicula={pelicula} id={index} />       
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            <p>Última página: {ultimaPagina}</p>
        </>
    );
}