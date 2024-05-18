import '../estilos/Empleado.css';

export function Empleado({ empleado }) {
    return (
        <tr className="empleado-card">
            <td>{empleado.empleado_id}</td>
            <td>{empleado.nombre}</td>
            <td>{empleado.apellido}</td>
            <td>{empleado.nombre_departamento}</td>
            <td>{empleado.nombre_cargo}</td>
            <td>{empleado.fecha_ingreso}</td>
            <td>{empleado.eps}</td>
            <td>{empleado.fondo_pension}</td>
            <td>{empleado.sueldo}</td>
            <td>{empleado.descripcion_novedad}</td>
            <td>{empleado.fecha_novedad}</td>
            <td>
                <button className='button Editar-button'>Editar</button>
                <button className='button Eliminar-button'>Eliminar</button>
               
            </td>
        </tr>
    );
}
