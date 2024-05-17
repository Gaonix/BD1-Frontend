import { useState, useEffect } from "react";
import { Navegacion } from "./Navegacion";
import { Libro } from "./Libro";
import { useNavigate } from "react-router-dom";
import '../estilos/Biblioteca.css';

export function Biblioteca() {
    const [admin, setAdmin] = useState(false);
    const [libros, setLibros] = useState([]);
    const navegador = useNavigate();

    useEffect(() => {
        fetch("src/api/books.json")
            .then(response => {
                if (!response.ok) {
                    throw new Error("La respuesta de red no fue exitosa");
                }
                return response.json();
            })
            .then(data => {
                setLibros(data);
            })
            .catch(error => {
                console.error("Error al cargar libros:", error);
                // Manejar el error (por ejemplo, mostrar un mensaje de error)
            });
    }, []);

    return (
        <>
            <Navegacion />
            <h1>BIBLIOTECA</h1>
            <div className="boton-conteiner">
                <button
                    className="button-default bt1"
                    onClick={() => setAdmin(!admin)}
                >
                    {admin ? "Vista Usuario" : "Vista Admin"}
                </button>
                {admin && (
                    <button
                        className="button-default bt1"
                        onClick={() => navegador("/formulario-libro")}
                    >
                        Agregar
                    </button>
                )}
            </div>
            {admin ? (
                <div className="contenedor-admin">
                    <table className="tabla-libros">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Título</th>
                                <th>Autor</th>
                                <th>Calificación</th>
                                <th>ISBN</th>
                                <th>ISBN13</th>
                                <th>Idioma</th>
                                <th># Páginas</th>
                                <th>Recuento de Calificaciones</th>
                                <th>Fecha Publicación</th>
                                <th>Editorial</th>
                            </tr>
                        </thead>
                        <tbody>
                            {libros.map((libro, index) => (
                                <Libro key={index} libro={libro} />
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="contenedor-user">
                    {/* Contenido de vista de usuario */}
                </div>
            )}
        </>
    );
}
