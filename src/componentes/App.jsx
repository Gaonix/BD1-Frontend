import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navegacion } from "./Navegacion";
import { Auditoria } from "./Auditoria";
import { Cartelera } from "./Cartelera";
import { Biblioteca } from "./Biblioteca";
import { Peliculaform } from "./Peliculaform";
import {Ingreso} from "./Ingreso"
import { Empleadoform } from "./Empleadoform";
import { Libroform } from "./Libroform";

import '../estilos/style.css'
import { FormNomina } from "./FormNomina";
import { Generos } from "./Generos";
export function App(){
    return<> 
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Ingreso></Ingreso>}></Route>
                    <Route path="/Auditoria"element={<Auditoria></Auditoria>}></Route>
                    <Route path="/Cartelera"element={<Cartelera></Cartelera>}></Route> 
                    <Route path="/Biblioteca" element={<Biblioteca></Biblioteca>}></Route>        
                    <Route path="/formulario" element={<Peliculaform></Peliculaform>}></Route>
                    <Route path="/formulario-Empleado/" element={<Empleadoform></Empleadoform>}></Route>
                    <Route path="/formulario-libro"element={<Libroform></Libroform>}></Route>
                    <Route path="/nomina-form/" element={<FormNomina></FormNomina>}></Route>
                    <Route path="/formulario-genero" element={<Generos></Generos>}></Route>
                </Routes>
            </BrowserRouter>
            
        </>
}