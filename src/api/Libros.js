import axios from 'axios'
export const ObtenerLibros= ()=>{
    return axios.get('http://localhost:8000/productos/api/productos/libros/');
}
export const CrearLibro= (libro)=>{
    return axios.post('http://localhost:8000/productos/api/productos/libros/',libro);
}