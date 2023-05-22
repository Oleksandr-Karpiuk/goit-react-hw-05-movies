import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { searchMovie } from '../../services/api';
import { Dna } from 'react-loader-spinner';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './Movies.module.css';

const Movies = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');
  const [query, setQuery] = useState(() => searchQuery || '');
  const location = useLocation();

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const { results } = await searchMovie(searchQuery);
        setData(results);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (searchQuery) {
      getData();
    }
    setQuery('');
  }, [searchQuery]);

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
    setQuery('');
  };

  return (
    <>
      <h1 className={css.movies__title}>Search movies</h1>
      <form onSubmit={handleSubmit} className={css.movies__form}>
        <input
          type="text"
          name="search"
          value={query}
          autoComplete="off"
          autoFocus
          placeholder="Enter a movie name"
          onChange={handleChange}
          className={css.movies__input}
        />
        <button type="submit" className={css.movies__btn}>
          Search
        </button>
      </form>
      <ul className={css.movies__list}>
        {searchQuery ? (
          loading ? (
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
          ) : data?.length > 0 ? (
            data.map(({ title, id, poster_path }) => (
              <li key={id} className={css.movies__item}>
                <Link
                  to={`/movies/${id}`}
                  state={{ from: location }}
                  className={css.movies__link}
                >
                  <img
                    src={
                      poster_path
                        ? 'https://image.tmdb.org/t/p/w500' + poster_path
                        : 'https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg'
                    }
                    alt={title}
                    className={css.movies__img}
                    width={400}
                    height={600}
                  />
                  <p className={css.movies__text}>{title}</p>
                </Link>
              </li>
            ))
          ) : (
            <p className={css.movies__message}>
              No movies with this title were found. Try enter another title.
            </p>
          )
        ) : (
          <p className={css.movies__message}>
            Pleace enter any title to search movies.
          </p>
        )}
      </ul>
      <ToastContainer />
    </>
  );
};

export default Movies;
