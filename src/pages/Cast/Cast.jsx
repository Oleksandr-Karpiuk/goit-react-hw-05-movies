import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCast } from '../../services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Dna } from 'react-loader-spinner';
import css from './Cast.module.css';
import PropTypes from 'prop-types';

const Cast = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const { movieId } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const { cast } = await getMovieCast(movieId);
        setData(cast);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [movieId]);

  return (
    <>
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
      ) : data?.length > 0 ? (
        <div className={css.cast__wrap}>
          <ul className={css.cast__list}>
            {data.map(({ name, character, profile_path, id }) => (
              <li key={id} className={css.cast__item}>
                <img
                  src={
                    profile_path
                      ? 'https://image.tmdb.org/t/p/w92' + profile_path
                      : 'https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg'
                  }
                  alt={name}
                  className={css.cast__photo}
                />
                <p className={css.cast__name}>{name}</p>
                <p className={css.cast_character}>{character}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className={css.cast__message}>No data found</p>
      )}
      <ToastContainer />
    </>
  );
};

export default Cast;

Cast.propTypes = {
  movieId: PropTypes.number,
};
