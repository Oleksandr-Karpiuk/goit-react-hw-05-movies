import { Suspense, useRef, useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Dna } from 'react-loader-spinner';
import { getMovieDetails } from '../../services/api';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await getMovieDetails(movieId);
        setData(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [movieId]);

  const getYear = releaseDate => {
    const date = new Date(releaseDate);
    return date.getFullYear();
  };

  const getGenres = genres => {
    return genres.map(genre => genre.name).join(', ');
  };

  return (
    <>
      <h1 className={css.subtitle}>Additional information</h1>
      <Link to={backLinkLocationRef.current} className={css.link__style}>
        Go Back
      </Link>
      {loading ? (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          wrapperClass="dna-wrapper"
        />
      ) : (
        <>
          <div className={css.poster__wrap}>
            <img
              src={
                data.poster_path
                  ? 'https://image.tmdb.org/t/p/w500' + data.poster_path
                  : 'https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg'
              }
              alt={data.original_title}
              className={css.poster__img}
              width={330}
            />
            <div className={css.descr__wrap}>
              <h2 className={css.movie__title}>
                {data.original_title} ({getYear(data.release_date)})
              </h2>
              <p className={css.descr__title}>
                User Score: {~~(data.vote_average * 10)}%
              </p>
              <p className={css.descr__title}>Overview</p>
              <p className={css.descr__text}>{data.overview}</p>
              <p className={css.descr__title}>Genres</p>
              <p className={css.descr__text}>{getGenres(data.genres)}</p>
            </div>
          </div>
          <ul className={css.links__list}>
            <li>
              <Link to="cast" className={css.link__style}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" className={css.link__style}>
                Reviews
              </Link>
            </li>
          </ul>
          <Suspense
            fallback={
              <Dna
                visible={true}
                height="200"
                width="200"
                ariaLabel="dna-loading"
                wrapperStyle={{
                  position: 'fixed',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
                wrapperClass="dna-wrapper"
              />
            }
          >
            <Outlet />
          </Suspense>
        </>
      )}
      <ToastContainer />
    </>
  );
};

export default MovieDetails;
