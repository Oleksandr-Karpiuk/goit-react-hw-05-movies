import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Dna } from 'react-loader-spinner';
import Container from '../Container/Container';
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
        </Container>
      </main>
      {/* <footer className={css.footer}>
        <Container>
          <p className={css.footer__text}>
            &copy;Developed by Oleksandr Karpiuk. IT School GoIT
          </p>
        </Container>
      </footer> */}
    </>
  );
};

export default Layout;
