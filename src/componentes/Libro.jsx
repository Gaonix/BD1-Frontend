import '../estilos/Libro.css';

export function Libro({ libro }) {
    return (
        <tr>
            <td>{libro.bookID}</td>
            <td>{libro.title}</td>
            <td>{libro.authors}</td>
            <td>{libro.average_rating}</td>
            <td>{libro.isbn}</td>
            <td>{libro.isbn13}</td>
            <td>{libro.language_code}</td>
            <td>{libro.num_pages}</td>
            <td>{libro.ratings_count}</td>
            <td>{libro.publication_date}</td>
            <td>{libro.publisher}</td>
        </tr>
    );
}
