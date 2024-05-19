import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {CrearLibro  } from "../api/Libros";

export function Libroform() {
  const navegador = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      await CrearLibro(data);
      navegador("/Auditoria");
    } catch (error) {
      console.error('Error al crear Empleado:', error);
    }
  };

  return (
    <>
      <h1>Formulario de Empleado</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="pregunta">
          <label className="etiqueta" htmlFor="titulo">Título</label>
          <input
            type="text"
            id="titulo"
            placeholder="Título"
            {...register("titulo", { required: true })}
          />
          {errors.titulo && <span>El Título es obligatorio</span>}
        </div>
        <div className="pregunta">
          <label className="etiqueta" htmlFor="isbn">ISBN</label>
          <input
            type="text"
            id="isbn"
            placeholder="ISBN"
            {...register("isbn", { required: true })}
          />
          {errors.isbn && <span>El ISBN es obligatorio</span>}
        </div>
        <div className="pregunta">
          <label className="etiqueta" htmlFor="isbn13">ISBN13</label>
          <input
            type="text"
            id="isbn13"
            placeholder="ISBN13"
            {...register("isbn13", { required: true })}
          />
          {errors.isbn13 && <span>El ISBN13 es obligatorio</span>}
        </div>
        <div className="pregunta">
          <label className="etiqueta" htmlFor="codigo_idioma">Código de Idioma</label>
          <input
            type="text"
            id="codigo_idioma"
            placeholder="Código de Idioma"
            {...register("codigo_idioma", { required: true })}
          />
          {errors.codigo_idioma && <span>El Código de Idioma es obligatorio</span>}
        </div>
        <div className="pregunta">
          <label className="etiqueta" htmlFor="numero_paginas">Número de Páginas</label>
          <input
            type="number"
            id="numero_paginas"
            placeholder="Número de Páginas"
            {...register("numero_paginas", { required: true })}
          />
          {errors.numero_paginas && <span>El Número de Páginas es obligatorio</span>}
        </div>
        <div className="pregunta">
          <label className="etiqueta" htmlFor="fecha_publicacion">Fecha de Publicación</label>
          <input
            type="date"
            id="fecha_publicacion"
            placeholder="Fecha de Publicación"
            {...register("fecha_publicacion", { required: true })}
          />
          {errors.fecha_publicacion && <span>La Fecha de Publicación es obligatoria</span>}
        </div>
        <div className="pregunta">
          <label className="etiqueta" htmlFor="editorial">Editorial</label>
          <input
            type="text"
            id="editorial"
            placeholder="Editorial"
            {...register("editorial", { required: true })}
          />
          {errors.editorial && <span>La Editorial es obligatoria</span>}
        </div>
        <div className="pregunta">
          <label className="etiqueta" htmlFor="anio_publicacion">Año de Publicación</label>
          <input
            type="number"
            id="anio_publicacion"
            placeholder="Año de Publicación"
            {...register("anio_publicacion", { required: true })}
          />
          {errors.anio_publicacion && <span>El Año de Publicación es obligatorio</span>}
        </div>
        <div className="pregunta">
          <label className="etiqueta" htmlFor="calificacion">Calificación</label>
          <input
            type="text"
            id="calificacion"
            placeholder="Calificación"
            {...register("calificacion", { required: true })}
          />
          {errors.calificacion && <span>La Calificación es obligatoria</span>}
        </div>
        <div className="pregunta">
          <label className="etiqueta" htmlFor="cantidad_calificaciones">Cantidad de Calificaciones</label>
          <input
            type="number"
            id="cantidad_calificaciones"
            placeholder="Cantidad de Calificaciones"
            {...register("cantidad_calificaciones", { required: true })}
          />
          {errors.cantidad_calificaciones && <span>La Cantidad de Calificaciones es obligatoria</span>}
        </div>
        <div className="pregunta">
          <label className="etiqueta" htmlFor="cantidad_resenas">Cantidad de Reseñas</label>
          <input
            type="number"
            id="cantidad_resenas"
            placeholder="Cantidad de Reseñas"
            {...register("cantidad_resenas", { required: true })}
          />
          {errors.cantidad_resenas && <span>La Cantidad de Reseñas es obligatoria</span>}
        </div>
        <button className="button-default">Agregar</button>
        <button className="button-default" onClick={() => { navegador("/Auditoria") }}>Regresar</button>
      </form>
    </>
  );
}
