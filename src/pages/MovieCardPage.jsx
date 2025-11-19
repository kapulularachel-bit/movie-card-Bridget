import MovieCard from '../components/MovieCard.jsx';
import { DataFile } from '../data/movieData';

export default function MovieCardPage(){
    return(
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', padding: '20px'}}>
            {DataFile.results.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    )
}