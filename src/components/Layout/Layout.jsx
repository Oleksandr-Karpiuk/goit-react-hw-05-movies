import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Dna } from 'react-loader-spinner';
import Container from '../Container/Container';
import PageContainer from 'components/Container/PageContainer';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <Container>
          <nav>
            <ul className={css.nav__list}>
              <li className={css.nav__item}>
                <NavLink to="/" className={css.nav__link}>
                  Home
                </NavLink>
              </li>
              <li className={css.nav__item}>
                <NavLink to="/movies" className={css.nav__link}>
                  Movies
                </NavLink>
              </li>
            </ul>
          </nav>
        </Container>
      </header>
      <main>
        <Container>
          <PageContainer>
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
          </PageContainer>
        </Container>
      </main>
      <footer className={css.footer}>
        <Container>
          <p className={css.footer__text}>
            &copy;Developed by{' '}
            <a
              href="https://www.linkedin.com/in/oleksandr-karpiuk/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className={css.footer__link}
            >
              Oleksandr Karpiuk
            </a>
            . IT School GoIT.
          </p>
        </Container>
      </footer>
    </>
  );
};

export default Layout;
