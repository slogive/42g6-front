import type { NextPage } from 'next';
import { GetServerSideProps } from 'next';

///////////////////////////////////////////////

const Home: NextPage = () => {
  return <div></div>;
};

///////////////////////////////////////////////

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    redirect: {
      permanent: false,
      destination: '/hoteles',
    },
  };
};

///////////////////////////////////////////////

export default Home;
