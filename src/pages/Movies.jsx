import { Link, useLocation, useParams } from 'react-router-dom';

const Movies = () => {
  const { movieId } = useParams();
  const location = useLocation();

  // Добавити в імпорт useSearchParams
  // const [searchParams, setSearchParams] = useSearchParams();
  // const movieParamName = searchParams.get('movieId') ?? "";

  // const updateQueryString = e => {
  //   if (e.target.value === '') {
  //     return setSearchParams({});
  //   }
  //   setSearchParams({ movieParamName: e.targe.value });
  // };

  // const searchMovie = movies.filter(movie => movie.includes(movieParamName));

  return (
    <>
      <form>
        <button type="submit">
          <span>Search</span>
        </button>

        <input
          type="text"
          //   name="movieParamName"
          //   value={movieParamName}
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          //   onChange={updateQueryString}
        />
      </form>

      <h1>Info about Movies</h1>
      <p>
        Тут буде інпут, value якого використаємо для GET запиту на бек і респонс
        через map зробимо у список фільмів за ключовим словом
      </p>
      <ul>
        <li>
          <Link to="1" state={{ from: location }}>
            Film with id: 1
          </Link>
        </li>
        <li>
          <Link to="2" state={{ from: location }}>
            Film with id: 2
          </Link>
        </li>
        <li>
          <Link to="3" state={{ from: location }}>
            Film with id: 3
          </Link>
        </li>
        <li>
          <Link to="4" state={{ from: location }}>
            Film with id: 4
          </Link>
        </li>
        <li>
          <Link to={`${movieId}`} state={{ from: location }}>
            Film with id: ID from api
          </Link>
        </li>
        {/* останній елемент списку - запис для функції з map */}
      </ul>
    </>
  );
};

export default Movies;
