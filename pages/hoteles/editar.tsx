import { Main } from 'layouts';
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';
import { Edit as Edit_ } from 'components/hotels';

///////////////////////////////////////////////

const Edit = (props: any): JSX.Element => {
  return (
    <Main title='Editar hotel'>
      <Edit_ Props={{ Server: props }} />
    </Main>
  );
};

///////////////////////////////////////////////

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: { ...context.query },
  };
};

///////////////////////////////////////////////

export default Edit;
