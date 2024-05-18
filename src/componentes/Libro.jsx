import '../estilos/Libro.css';

export function Libro({ libro }) {
    return (
            /*<td>{libro.promedio_calificacion}</td>*/
        <tr>
            <td>{libro.id}</td>
            <td>{libro.titulo}</td>
            <td>{libro.isbn}</td>
            <td>{libro.isbn13}</td>
            <td>{libro.codigo_idioma}</td>
            <td>{libro.numero_paginas}</td>
            <td>{libro.fecha_publicacion}</td>
            <td>{libro.editorial}</td>
            <td>{libro.anio_publicacion}</td>
            <td>{libro.calificacion}</td>
            <td>{libro.cantidad_calificaciones}</td>
            <td>{libro.cantidad_resenas}</td>
        </tr>
    );
}
