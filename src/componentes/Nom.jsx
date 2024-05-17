import { EliminarNomina } from '../api/EmpleadosApi';
import '../estilos/Empleado.css';

export function Nom({ empleado }) {
    return (
        <tr className="empleado-card">
            <td>{empleado.NominaID}</td>
            <td>{empleado.Sueldo}</td>
            <td>{empleado.FechaIngreso}</td>
            <td>{empleado.EPS}</td>
            <td>{empleado.FondoPension}</td>
            <td>{empleado.Empleado}</td>
            <td>{empleado.Cargo}</td>
            <td>{empleado.Departamento}</td>
            <td>
                <button className='button Editar-button'>Editar</button>
                <button className='button Eliminar-button' onClick={async()=>{
                        const accepted=window.confirm("Esta seguro de eliminar Esta nomina");
                        if (accepted){
                            await EliminarNomina(empleado.NominaID)}
                            window.location.reload();
                        }
                    
                }>Eliminar</button>
               
            </td>
        </tr>
    );
}
