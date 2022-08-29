import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from '../list/list.module.scss';

///////////////////////////////////////////////

const Edit = ({
  Props: { Server },
}: {
  Props: {
    Server: {
      id: string;
      destino: string;
      proveedor: string;
      opciones?: string;
    };
  };
}): JSX.Element => {
  const router = useRouter();

  ///////////////////////////////////////////////

  const [input, setInput] = useState<{ id: string; destino: string; proveedor: string }>(Server);

  ///////////////////////////////////////////////

  const handleChange = (Evt: {
    target: {
      value: string | number;
      name: string;
    };
  }) => {
    setInput({ ...input, [Evt.target.name]: Evt.target.value });
  };

  ///////////////////////////////////////////////

  return (
    <div className={styles.c_list}>
      <header className={styles.header}>
        <h3>Listado de Alojamientos</h3>
      </header>

      <nav>
        <button onClick={() => router.push('/hoteles')}>Volver</button>
      </nav>

      <form
        className={styles.edit}
        onSubmit={(Evt) => {
          Evt.preventDefault();
        }}
      >
        <label htmlFor=''>Destino</label>
        <input type='text' name='destino' id='destino' value={input.destino} onChange={handleChange} />

        <label htmlFor=''>Proveedor</label>
        <input type='text' name='proveedor' id='proveedor' value={input.proveedor} onChange={handleChange} />

        <button type='submit'>Guardar</button>

        {/* <pre>{JSON.stringify(Server, undefined, 2)}</pre> */}
      </form>
    </div>
  );
};

///////////////////////////////////////////////

export { Edit };
