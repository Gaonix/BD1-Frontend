import { NavLink } from "react-router-dom";

export function Navegacion(){
    return  <>
    <nav className="navbar">
        <ul>
            
            <label>EntreCol</label>
            <NavLink to="/Cartelera" className="navBar_link">Peliculas</NavLink>
            <NavLink to="/Biblioteca" className="navBar_link">Libros</NavLink>
            <NavLink to="/Auditoria"className="navBar_link">Administracion</NavLink>
            <NavLink to="/Estadisticas" className="navBar_link">Estadisticas</NavLink>
            <NavLink to="/"className="navBar_link">Salir</NavLink>

        </ul>
    </nav>
    </>
}