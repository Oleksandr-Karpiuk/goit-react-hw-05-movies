import { Link, useParams } from 'react-router-dom';

const Movies = () => {
  const { movieId } = useParams();
  return (
    <>
      <form>
        <button type="submit">
          <span>Search</span>
        </button>

        <input
          type="text"
          //   name="searchData"
          //   value={searchData}
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          //   onChange={handleChange}
        />
      </form>

      <h1>Info about Movies</h1>
      <p>
        Тут буде інпут, value якого використаємо для GET запиту на бек і респонс
        через map зробимо у список фільмів за ключовим словом
      </p>
      <ul>
        <li>
          <Link to=":movieId">Film with id: {movieId}</Link>
        </li>
        <li>
          <Link to=":movieId">Film with id: {movieId}</Link>
        </li>
        <li>
          <Link to=":movieId">Film with id: {movieId}</Link>
        </li>
        <li>
          <Link to=":movieId">Film with id: {movieId}</Link>
        </li>
        <li>
          <Link to=":movieId">Film with id: {movieId}</Link>
        </li>
      </ul>
    </>
  );
};

export default Movies;
