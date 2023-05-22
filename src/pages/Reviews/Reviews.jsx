import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from '../../services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Dna } from 'react-loader-spinner';
import css from './Reviews.module.css';

const Reviews = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const { movieId } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const { results } = await getMovieReviews(movieId);
        setData(results);
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
        <div className={css.reviews__wrap}>
          <ul className={css.reviews__list}>
            {data.map(({ author, content, id }) => (
              <li key={id} className={css.reviews__item}>
                <p className={css.reviews__autor}>{author}</p>
                <p className={css.reviews__content}>{content && content}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className={css.reviews__message}>No reviews found</p>
      )}
      <ToastContainer />
    </>
  );
};

export default Reviews;
