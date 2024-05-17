import '../estilos/Formulario.css';
import { useForm } from 'react-hook-form';
import { crearPelicula } from '../api/peliculasApi';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
export function Peliculaform() {
    const navegacion = useNavigate();
  
   
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data) => {
        console.log(data)
        try {
            await crearPelicula(data);
            navegacion("/Auditoria");
        } catch (error) {
            console.error('Error al crear película:', error);
        }
    };

    return (
        <>
            <h1>Formulario de película:</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="pregunta">
                        <label htmlFor="titulo" className='etiqueta'>Nombre:</label>
                        <input
                            type="text"
                            id="titulo"
                            placeholder='Nombre de la película'
                            {...register('titulo', { required: true })}
                    />
                    {errors.titulo && <span>¡EL NOMBRE ES OBLIGATORIO!</span>}
                </div>
                <div className="pregunta">
                    <label htmlFor="anio_lanzamiento" className='etiqueta'>Estreno:</label>
                    <input
                        type="number"
                        id="anio_lanzamiento"
                        placeholder='Año de estreno'
                        {...register('anio_lanzamiento', { required: true })}
                    />
                    {errors.anio_lanzamiento && <span>¡EL AÑO DE LANZAMIENTO ES OBLIGATORIO!</span>}
                </div>

                <button className='button-default button-form'>Registrar</button>
            </form>
            <button onClick={() => navegacion("/Cartelera")} className='button-default button-form'>Regresar</button>
        </>
    );
}
