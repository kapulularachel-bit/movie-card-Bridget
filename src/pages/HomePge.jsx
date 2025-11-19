import { useNavigate } from 'react-router-dom';

export default function HomePage(){
  const navigate = useNavigate();

  const handleExploreMore = () => {
    navigate('/MovieCardPages');
  };

  return(
    <div className="hero-section">
      <div className="content">
        <h1>Discover Movies Instantly!</h1>
        <p>Find the best films, reviews, and trailers at your fingertips.</p>
        <div className='button'>
          <button onClick={handleExploreMore}>Explore More</button>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  )
}