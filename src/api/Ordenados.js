import axios from 'axios'
export const NombreAscendente= ()=>{
    return axios.get('http://localhost:8000/empleados/api/empleados/lista-empleados-por-nombreASC/');
}
export const NombreDesendente= ()=>{
    return axios.get('http://localhost:8000/empleados/api/empleados/lista-empleados-por-nombreDESC/');
}
export const EpsAscendente= ()=>{
    return axios.get('http://localhost:8000/empleados/api/empleados/lista-empleados-por-EPSASC/');
}
export const CargoAscendente= ()=>{
    return axios.get('http://localhost:8000/empleados/api/empleados/lista-empleados-por-cargoASC/');
}
