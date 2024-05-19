import { useEffect, useState } from "react"
import { Empleado } from "./Empleado"
import {NombreAscendente,NombreDesendente,EpsAscendente,CargoAscendente} from '../api/Ordenados'
export function Ordenados(){
const [empleadoas,setempleadoas]=useState([])
const [empleadodes,setempleadodes]=useState([])
const [epsas,setepsas]=useState([])
const [cargoas,setcargoas]=useState([])
const [estado,setestado]=useState(0)

useEffect(()=>{
    async function cargarea(){
        const res=await NombreAscendente();
        setempleadoas(res.data)
        console.log(res.data)
    }
    cargarea()
    async function cargared(){
        const res=await NombreDesendente();
        setempleadodes(res.data)
        console.log(res.data)
    }
    cargared()
    async function cargaredpa(){
        const res=await EpsAscendente();
        setepsas(res.data)
        console.log(res.data)
    }
    cargaredpa()
    async function cargarcarsa(){
        const res=await CargoAscendente();
        setcargoas(res.data)
        console.log(res.data)
    }
    cargarcarsa()
    setestado(1)
},[]);
return<>
<div>
    <button onClick={()=>{setestado(1)}}>Nombre ascendente</button>
    <button onClick={()=>{setestado(2)}}>Nombre Descendente</button>
    <button onClick={()=>{setestado(3)}}>Eps Ascendente</button>
    <button onClick={()=>{setestado(4)}}>Cargo Ascendente</button>
</div>

    <div className="contedor-tabla">
                                <table>
                                    <thead>
                                        <tr className="empleado-card">
                                            <th>Id</th>
                                            <th>Nombre</th>
                                            <th>apellido</th>
                                            <th>Departamento</th>
                                            <th>Cargo</th>
                                            <th>Fecha de ingreso</th>
                                            <th>Eps</th>
                                            <th>Pensión</th>
                                            <th>Sueldo</th>
                                            <th>novedad</th>
                                            <th>fecha_novedad</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {estado==1&&(<>
                                        {empleadoas.map((empleado, index) => (
                                            <Empleado key={index} empleado={empleado} />
                                        ))}
                                        </>)}
                                        {estado==2&&(<>
                                            {empleadodes.map((empleado, index) => (
                                            <Empleado key={index} empleado={empleado} />
                                        ))}
                                        </>)}
                                        {estado==3&&(<>
                                            {epsas.map((empleado, index) => (
                                            <Empleado key={index} empleado={empleado} />
                                        ))}
                                        
                                        </>)}

                                        {estado==4&&(<>
                                            {cargoas.map((empleado, index) => (
                                            <Empleado key={index} empleado={empleado} />
                                        ))}
                                        
                                        </>)}
                                    </tbody>
                                </table>
                            </div>



</>
}


