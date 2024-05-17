import { useNavigate } from "react-router-dom"
export function Libroform(){
const navegador=useNavigate()
return(<>

        <h1>Crear Libro</h1>
        
    <form action="">

        <div className="pregunta">

        <label htmlFor="bookID " className="etiqueta">ID del Libro:</label><input type="text" id="bookID" name="bookID"/>
        </div>
        <div className="pregunta">

        <label htmlFor="title " className="etiqueta">Título:</label><input type="text" id="title" name="title" />
        </div>
        <div className="pregunta">

        <label htmlFor="authors " className="etiqueta">Autores:</label><input type="text" id="authors" name="authors" />
        </div>
        <div className="pregunta">

        <label htmlFor="average_rating " className="etiqueta">Rating Promedio:</label><input type="text" id="average_rating" name="average_rating" />
        </div>
        <div className="pregunta">

        <label htmlFor="isbn " className="etiqueta">ISBN:</label><input type="text" id="isbn" name="isbn" />
        </div>
        <div className="pregunta">

        <label htmlFor="isbn13 " className="etiqueta">ISBN13:</label><input type="text" id="isbn13" name="isbn13" />
        </div>
        <div className="pregunta">

        <label htmlFor="language_code " className="etiqueta">Código de Idioma:</label><input type="text" id="language_code" name="language_code" />
        </div>
        <div className="pregunta">

        <label htmlFor="num_pages " className="etiqueta">Número de Páginas:</label><input type="text" id="num_pages" name="num_pages" />
        </div>
        <div className="pregunta">

        <label htmlFor="ratings_count " className="etiqueta">Número de Calificaciones:</label><input type="text" id="ratings_count" name="ratings_count" />
        </div>
        <div className="pregunta">

        <label htmlFor="text_reviews_count " className="etiqueta">Número de Reseñas de Texto:</label><input type="text" id="text_reviews_count" name="text_reviews_count" />
        </div>
        <div className="pregunta">

        <label htmlFor="publication_date " className="etiqueta">Fecha de Publicación:</label><input type="text" id="publication_date" name="publication_date" />
        </div>
        <div className="pregunta">

        <label htmlFor="publisher " className="etiqueta">Editorial:</label><input type="text" id="publisher" name="publisher" />
        </div>
        <div className="pregunta">

        <label htmlFor="FIELD13 " className="etiqueta">Campo 13:</label>
        <input type="text" id="FIELD13" name="FIELD13" />
        </div>
        
        <div className="pregunta">

        <button className="button-default" onClick={()=>{navegador("/Biblioteca")}}>Regresar</button>
        <button className="button-default" >Agregar libro</button>
        </div>
        
    </form>
        </>
    )
}   