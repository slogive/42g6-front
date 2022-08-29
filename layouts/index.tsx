import styles from './layouts.module.scss';
import Head from 'next/head';

///////////////////////////////////////////////

const Main = ({ children, title }: { children: JSX.Element; title: string }): JSX.Element => {
  return (
    <section className={styles.c_layouts}>
      <>
        <Head>
          <title>{title}</title>
        </Head>

        <header>
          <nav></nav>
        </header>

        <div>{children}</div>

        <footer></footer>
      </>
    </section>
  );
};

///////////////////////////////////////////////

export { Main };
