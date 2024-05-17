

export function Novedades({ novedades }) {
    return (
        <tr className="empleado-card">
            <td>{novedades.NovedadID}</td>
            <td>{novedades.Descripcion}</td>
            <td>{novedades.Fecha}</td>
            <td>{novedades.Empleado}</td>
        </tr>
    );
}
