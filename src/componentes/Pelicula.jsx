import { useState, useEffect } from 'react';
import '../estilos/Pelicula.css';

export function Pelicula({ pelicula }) {
    const [imagenUrl, setImagenUrl] = useState('');
    const [loading, setLoading] = useState(true);
    const apiKey = 'f6102505e603f23ab45bf9fd81e40742'; 

    useEffect(() => {
        async function fetchImagenUrl() {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(pelicula.titulo)}`);
                const data = await response.json();
                if (data.results.length > 0) {
                    const movieId = data.results[0].id;
                    const imageResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${apiKey}`);
                    const imageData = await imageResponse.json();
                    if (imageData.posters.length > 0) {
                        setImagenUrl(`https://image.tmdb.org/t/p/w500${imageData.posters[0].file_path}`);
                    }
                }
            } catch (error) {
                console.error('Error fetching image:', error);
            } finally {
                setLoading(false); // Marcar la carga como completada, independientemente de si hay un error o no
            }
        }
        
        fetchImagenUrl();
    }, [pelicula.titulo]);

    return (
        <div className="Card">
            {loading ? (
                <div className="loading">Cargando...</div>
            ) : imagenUrl ? (
                <img src={imagenUrl} alt={pelicula.nombre} />
            ) : (
                <div className="no-image">No se encontró imagen</div>
            )}
            <div className='Card-informacion'>
                <h2>id: {pelicula.id}</h2>
                <h2>Nombre: {pelicula.titulo}</h2>
                <h2>Fecha: {pelicula.anio_lanzamiento}</h2>
                <h2>Género: {pelicula.nombre_genero}</h2>
            </div>
        </div>
    );
}
