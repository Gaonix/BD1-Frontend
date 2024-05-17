import '../estilos/Empleado.css';
import { EliminarEmpleado } from '../api/EmpleadosApi'; 
export function Emp({ empleado }) {
    return (
        <tr className="empleado-card">
            <td>{empleado.EmpleadoID}</td>
            <td>{empleado.Nombre}</td>
            <td>{empleado.Apellido}</td>
            <td>{empleado.Cedula}</td>
            <td>{empleado.ARL}</td>
            <td>
                <button className='button Editar-button'>Editar</button>
                <button className='button Eliminar-button'onClick={async()=>{
                    const accepted=window.confirm("Esta seguro de eliminar Este empleado");
                    if (accepted){
                        await EliminarEmpleado(empleado.EmpleadoID)}
                        window.location.reload();
                    }

                    }>Eliminar</button>
               
            </td>
        </tr>
    );
}
