import {EliminarPelicula} from "../api/peliculasApi"
export function PeliculaItem({pelicula}){
    return<>
            <tr className="empleado-card">
            <td>{pelicula.id}</td>
            <td>{pelicula.titulo}</td>
            <td>{pelicula.anio_lanzamiento}</td>
            <td>{pelicula.nombre_genero}</td>
            <td>
                <button className='button-default' onClick={async()=>{
                    const accepted=window.confirm("Esta seguro de eliminar la pelicula");
                    if (accepted){
                       await EliminarPelicula(pelicula.id)}
                       window.location.reload();
                    }
                    }>Eliminar</button>
                <button className='button-default' >Editar</button>
                
               
            </td>
        </tr>
            </>
}