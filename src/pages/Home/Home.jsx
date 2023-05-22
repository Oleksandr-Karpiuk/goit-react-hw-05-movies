import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrendingMovies } from '../../services/api';
import { Dna } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './Home.module.css';

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await getTrendingMovies();
        setData(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <>
      <h1 className={css.subtitle}>The most popular movies</h1>
      <ul className={css.home__list}>
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
          data.map(({ title, id, poster_path }) => (
            <li key={id} className={css.home__item}>
              <Link
                to={`/movies/${id}`}
                state={{ from: location }}
                className={css.home__link}
              >
                <img
                  src={
                    poster_path
                      ? 'https://image.tmdb.org/t/p/w500' + poster_path
                      : 'https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg'
                  }
                  alt={title}
                  className={css.home__img}
                  width={400}
                  height={600}
                />
                <p className={css.home__text}>{title}</p>
              </Link>
            </li>
          ))
        )}
      </ul>
      <ToastContainer />
    </>
  );
};

export default Home;
