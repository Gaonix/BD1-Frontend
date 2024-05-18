import {EliminarNovedades} from "../api/EmpleadosApi"

export function Novedades({ novedades }) {
    return (
        <tr className="empleado-card">
            <td>{novedades.NovedadID}</td>
            <td>{novedades.Descripcion}</td>
            <td>{novedades.Fecha}</td>
            <td>{novedades.Empleado}</td>
            <td><button onClick={async()=>{
               const accepted=window.confirm("Esta seguro de eliminar Esta novedad");
               if (accepted){
                   await EliminarNovedades(novedades.NovedadID)}
                   window.location.reload();
               
            }}>Eliminar</button>
            <button>Editar</button>
            </td>

        </tr>

    );
}
