import { Suspense, useRef } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  return (
    <>
      <h2>Additional information {movieId}</h2>
      <Link to={backLinkLocationRef.current}>Go Back</Link>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpages...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
