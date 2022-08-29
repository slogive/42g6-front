import { Main } from 'layouts';

///////////////////////////////////////////////

const Create = (): JSX.Element => {
  return (
    <Main title='Iniciar sesion'>
      <form onSubmit={(Evt) => Evt.preventDefault()}>
        <label htmlFor=''>Email</label>
        <label htmlFor=''>Password</label>
        <label htmlFor=''>Password</label>
      </form>
    </Main>
  );
};

///////////////////////////////////////////////

export default Create;
