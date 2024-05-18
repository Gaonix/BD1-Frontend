import axios from 'axios'
export const ObtenerLibros= ()=>{
    return axios.get('http://localhost:8000/productos/api/productos/libros/');
}