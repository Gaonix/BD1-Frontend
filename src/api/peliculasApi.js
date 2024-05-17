import axios from 'axios'
export const obtenerPeliculas=()=>{
    return axios.get('http://localhost:8000/productos/api/productos/peliculas/')
}
export const crearPelicula=(pelicula)=>{
    return axios.post('http://localhost:8000/productos/api/productos/peliculas/',pelicula)
    
}
export const obtenerGeneros=()=>{
return axios.get("http://localhost:8000/productos/api/productos/generospelicula/")
}
export const EliminarPelicula=(id)=>{
    return axios.delete(`http://localhost:8000/productos/api/productos/peliculas/${id}`)
}
export const AgregarPeliculaGeneros=(genero)=>{
    return axios.post(`http://localhost:8000/productos/api/productos/peliculageneros/`,genero)
}
