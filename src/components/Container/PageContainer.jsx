import css from './PageContainer.module.css';
import PropTypes from 'prop-types';

const PageContainer = ({ children }) => {
  return <div className={css.page__container}>{children}</div>;
};

export default PageContainer;

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
