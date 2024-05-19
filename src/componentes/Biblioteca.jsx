import { useState, useEffect } from "react";
import { Navegacion } from "./Navegacion";
import { Libro } from "./Libro";
import { useNavigate } from "react-router-dom";
import {ObtenerLibros} from "../api/Libros"
import '../estilos/Biblioteca.css';

export function Biblioteca() {
    const [admin, setAdmin] = useState(false);
    const [libros, setLibros] = useState([]);
    const navegador = useNavigate();

    useEffect(() => {
    async function SolicitarLibros(){
        const res =await ObtenerLibros()
        setLibros(res.data.results)
        console.log(res.data)
    }
    SolicitarLibros();
    }, []);

    return (
        <>
            <Navegacion />
            <h1>BIBLIOTECA</h1>
            <div className="boton-conteiner">
                    <button
                        className="button-default bt1"
                        onClick={() => navegador("/formulario-libro")}
                    >
                        Agregar
                    </button>
            </div>
            
                <div className="contenedor-admin">
                           
                    <table className="tabla-libros">
                        <thead>
                            <tr>
                            <th>id</th>
                            <th>titulo</th>
                            <th>isbn</th>
                            <th>isbn13</th>
                            <th>codigo_idioma</th>
                            <th>numero_paginas</th>
                            <th>fecha_publicacion</th>
                            <th>editorial</th>
                            <th>anio_publicacion</th>
                            <th>calificacion</th>
                            <th>cantidad_calificaciones</th>
                            <th>cantidad_resenas</th>
                            </tr>
                        </thead>
                        <tbody>
                            {libros.map((libro, index) => (
                                <Libro key={index} libro={libro} />
                            ))}
                        </tbody>
                    </table>
                </div>

        </>
    );
}
