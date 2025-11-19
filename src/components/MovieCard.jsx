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
                  height="300"
                  image={movie.poster_path}
                  alt={movie.title}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>         
                      {movie.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: 1 }}>         
                      <strong>Year:</strong> {releaseTime}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: 1 }}>
                      <strong>Popularity:</strong> {movie.popularity}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {movieOverview}
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