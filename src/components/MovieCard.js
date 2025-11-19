import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions'
export default function MovieCard({movie}){

    const releaseTime = movie.release_date.split("-")[0]; //geting a year from the release date
    const movieOverview = movie.overview.length > 150 ? movie.overview.substring(0, 150) + "..." : movie.overview;

    return(
        <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  alt="green iguana"
                />
                <CardContent>
                    <img
                      src = {movie.poster_path}
                      alt = {movie.title}  
                      style = {{width: '100px', height: '150px', borderRadius: '8px'}}  
                    />
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>         
                      <h3>{movie.title}</h3>
                      <p><strong>Year</strong> {releaseTime}</p>
                      <p><strong>Popularity</strong> {movie.popularity}</p>
                      <p> {movieOverview}</p>
                    </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions>
            </Card>

    )
}