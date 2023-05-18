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
          <Link to="1">Film with id: 1</Link>
        </li>
        <li>
          <Link to="2">Film with id: 2</Link>
        </li>
        <li>
          <Link to="3">Film with id: 3</Link>
        </li>
        <li>
          <Link to="4">Film with id: 4</Link>
        </li>
        <li>
          <Link to={`${movieId}`}>Film with id: ID from api</Link>
        </li>
        {/* останній елемент списку - запис для функції з map */}
      </ul>
    </>
  );
};

export default Movies;
