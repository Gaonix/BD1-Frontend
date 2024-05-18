import axios from 'axios'
export const ObtenerEmpleadoInformacionPersonal= ()=>{
    return axios.get('http://127.0.0.1:8000/empleados/api/empleados/informacion-personal/?page=1');
}
export const crearEmpleadoInformacionPersonal=(usuario)=>{
    return axios.post('http://127.0.0.1:8000/empleados/api/empleados/informacion-personal/',usuario)
}
export const ObtenerEmpleado= ()=>{
    return axios.get('http://127.0.0.1:8000/empleados/api/empleados/empleados/?page=1');
}
export const crearEmpleado=(usuario)=>{
    return axios.post('http://127.0.0.1:8000/empleados/api/empleados/empleados/',usuario)
}
export const EliminarEmpleado=(id)=>{
    return axios.delete(`http://127.0.0.1:8000/empleados/api/empleados/empleados/${id}`)
}
export const ObtenerCargos= ()=>{
    return axios.get('http://127.0.0.1:8000/empleados/api/empleados/cargos/?page=1');
}
export const ObtenerDepartamento=()=>{
    return axios.get("http://127.0.0.1:8000/empleados/api/empleados/departamentos/?page=1");
}
export const CrearNomina=(nomina)=>{
return axios.post("http://127.0.0.1:8000/empleados/api/empleados/nominas/",nomina)
}
export const ObtenerNomina=()=>{
    return axios.get("http://127.0.0.1:8000/empleados/api/empleados/nominas/?page=1")
}
export const EliminarNomina=(id)=>{
    return axios.delete(`http://127.0.0.1:8000/empleados/api/empleados/nominas/${id}`)
}

export const obtenerNovedades=()=> {
    return axios.get('http://localhost:8000/empleados/api/empleados/novedades/?page=1')
 }
export const CrearNovedades=(nov)=> {
    return axios.post('http://127.0.0.1:8000/empleados/api/empleados/novedades/',nov)
 }