import { Navegacion } from "./Navegacion";
import { Empleado } from "./Empleado";
import { useNavigate } from "react-router-dom"; 
import { useEffect, useState } from "react";
import { ObtenerEmpleadoInformacionPersonal ,ObtenerEmpleado,ObtenerNomina,obtenerNovedades} from '../api/EmpleadosApi';
import '../estilos/Empleado.css';
import { Emp } from "./Emp";
import { Nom } from "./Nom";
import { Novedades } from "./Novedades";

export function Auditoria() {
    const [carga, setCarga] = useState(true);
    const navegador = useNavigate();
    const [infoempleados, setinfoempleados] = useState([]);
    const [empleados,setempleados]=useState([])
    const [elemento, setElemento] = useState();
    const [nomina,setnomina]=useState([])
    const [novedades,setNovedades]=useState([])
    useEffect(() => {
        async function obtenerInfo() {
            const res = await ObtenerEmpleadoInformacionPersonal();
            console.log(res.data.results);
            setinfoempleados(res.data);
        }
        
        async function obtenerE() {
            const res = await ObtenerEmpleado();
            console.log(res.data.results);
            setempleados(res.data.results);
        }
        
        async function obtenerN() {
            const res = await ObtenerNomina();
            console.log(res.data.results);
            setnomina(res.data.results);
        }
        
        async function obtenerNov() {
            const res = await obtenerNovedades();
            console.log(res.data.results);
            setNovedades(res.data.results);
        }
    
        obtenerInfo();
        obtenerE();
        obtenerN();
        obtenerNov();
        setElemento(1);
    }, []);
    

    return (
        <>
            <Navegacion />
            <h1>Administracion</h1>
            <div className="opt-buttons">
                <h2>Opciones:</h2>
                <button className="button-default" onClick={() => setElemento(1)}>info-empleados</button>
                <button className="button-default" onClick={() => setElemento(2)}>Empleados</button>
                <button className="button-default" onClick={() => setElemento(3)}>Nomina</button>
                <button className="button-default" onClick={() => setElemento(4)}>Novedades</button>
                <button className="button-default"onClick={()=>setElemento(5)}>Busqueda por facultades</button>
            </div>
            {carga ? (
                <>{elemento==0&&<></>}
                    {elemento === 1 && (
                        <>
                        
                            <div className="contenedor-botones">
                                <button className="button-default" onClick={() => navegador(`/formulario-Empleado/`)}>
                                    Agregar Empleado
                                </button>
                                <button className="button-default" onClick={() => navegador(`/nomina-form/`)}>
                                    Agregar nómina
                                </button>
                            </div>
                            <div className="contedor-tabla">
                                <table>
                                    <thead>
                                        <tr className="empleado-card">
                                            <th>Id</th>
                                            <th>Departamento</th>
                                            <th>Cargo</th>
                                            <th>Fecha de ingreso</th>
                                            <th>Eps</th>
                                            <th>Pensión</th>
                                            <th>Sueldo</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {infoempleados.map((empleado, index) => (
                                            <Empleado key={index} empleado={empleado} />
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </>
                    )}
                    {elemento===2&&(
                    <>
                    
                        <div className="contenedor-botones">
                            <button className="button-default" onClick={() => navegador(`/formulario-Empleado/`)}>
                                Agregar Empleado
                            </button>
                            <button className="button-default" onClick={() => navegador(`/nomina-form/`)}>
                                Agregar nómina
                            </button>
                        </div>
                        <div className="contedor-tabla">
                            <table>
                                <thead>
                                    <tr className="empleado-card">
                                        <th>Id</th>
                                        <th>nombre</th>
                                        <th>apellido</th>
                                        <th>cedula</th>
                                        <th>arl</th>
                                        <th>acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {empleados.map((empleado, index) => (
                                        <Emp key={index} empleado={empleado} />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </>
                    
                    )}
                    {elemento===3&&(
                    <>
                    
                        <div className="contenedor-botones">
                            <button className="button-default" onClick={() => navegador(`/formulario-Empleado/`)}>
                                Agregar Empleado
                            </button>
                            <button className="button-default" onClick={() => navegador(`/nomina-form/`)}>
                                Agregar nómina
                            </button>
                        </div>
                        <div className="contedor-tabla">
                            <table>
                                <thead>
                                    <tr className="empleado-card">
                                        <th>Id</th>
                                        <th>Sueldo</th>
                                        <th>FechaIngreso</th>
                                        <th>Eps</th>
                                        <th>Fondo pension</th>
                                        <th>Empleado</th>
                                        <th>cargo</th>
                                        <th>Departamento</th>
                                        <th>acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {nomina.map((empleado, index) => (
                                        <Nom key={index} empleado={empleado} />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </>
                    )}
                    {elemento==4&&(
                        
                         <div className="contenedor-tabla">
                            
                              <table>
                                  <thead>
                                      <tr className="empleado-card">
                                          <th>Novedad ID</th>
                                          <th>Descripción</th>
                                          <th>Fecha</th>
                                          <th>Empleado ID</th>
                                      </tr>
                                  </thead>
                              <tbody>
                                  {novedades.map((novedades, index) => (
                                      <Novedades key={index} novedades={novedades}/>
                                    ))}
                              </tbody>
                            </table>
                         </div>
                    )}
                </>
            ) : (
                <h1>Cargando...</h1>
            )}
        </>
    );
}
