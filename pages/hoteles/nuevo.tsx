import { Main } from 'layouts';
import { Create as Create_ } from 'components/hotels';

///////////////////////////////////////////////

const Create = (): JSX.Element => {
  return (
    <Main title='Nuevo hotel'>
      <Create_ />
    </Main>
  );
};

///////////////////////////////////////////////

export default Create;
