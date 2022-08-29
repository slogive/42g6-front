import styles from './list.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { Fragment, useState } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

///////////////////////////////////////////////

const List = (): JSX.Element => {
  const router = useRouter();

  ///////////////////////////////////////////////

  const [input, setInput] = useState<{
    search: string;
  }>({
    search: '',
  });

  ///////////////////////////////////////////////

  const data = [
    { id: 'ID', destino: 'Destino', proveedor: 'Proveedor', opciones: 'Opciones' },
    {
      id: uuidv4().slice(0, 5),
      destino: 'Cali - Valle del Cauca - Colombia',
      proveedor: `Prov${uuidv4().slice(0, 5)}`,
    },
    {
      id: uuidv4().slice(0, 5),
      destino: 'Leticia - Amazonas - Colombia',
      proveedor: `Prov${uuidv4().slice(0, 5)}`,
    },
    {
      id: uuidv4().slice(0, 5),
      destino: 'Riohacha - La guajira - Colombia',
      proveedor: `Prov${uuidv4().slice(0, 5)}`,
    },
    {
      id: uuidv4().slice(0, 5),
      destino: 'Cali - Valle del Cauca - Colombia',
      proveedor: `Prov${uuidv4().slice(0, 5)}`,
    },
    {
      id: uuidv4().slice(0, 5),
      destino: 'Leticia - Amazonas - Colombia',
      proveedor: `Prov${uuidv4().slice(0, 5)}`,
    },
    {
      id: uuidv4().slice(0, 5),
      destino: 'Riohacha - La guajira - Colombia',
      proveedor: `Prov${uuidv4().slice(0, 5)}`,
    },
  ];

  const [mock, setMock] = useState<Array<{ id: string; destino: string; proveedor: string; opciones?: string }>>();

  useEffect(() => {
    setMock(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  ///////////////////////////////////////////////

  const handleChange = (Evt: {
    target: {
      name: string;
      value: string | number;
    };
  }) => {
    setInput({ ...input, [Evt.target.name]: Evt.target.value });
  };

  ///////////////////////////////////////////////

  const handleSearch = () => {
    if (input.search.length == 0) return;

    setMock([
      { id: 'ID', destino: 'Destino', proveedor: 'Proveedor', opciones: 'Opciones' },
      ...data.filter((Itm) => {
        if (
          Itm.destino.slice(0, input.search.length).toLowerCase().trim().replace(/ /g, '') ==
          input.search.toLowerCase().trim().replace(/ /g, '')
        ) {
          return Itm;
        }
      }),
    ]);
  };

  ///////////////////////////////////////////////

  useEffect(() => {
    if (input.search.length == 0) {
      setMock(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input.search]);

  ///////////////////////////////////////////////

  return (
    <div className={styles.c_list}>
      <header className={styles.header}>
        <h3>Listado de Alojamientos</h3>
      </header>

      <nav>
        <form
          onSubmit={(Evt) => {
            Evt.preventDefault();
            handleSearch();
          }}
        >
          <input type='text' name='search' id='search' value={input.search} onChange={handleChange} />

          <button type='submit'>Buscar</button>
        </form>

        <button onClick={() => router.push('/hoteles/nuevo')}>Crear Alojamiento</button>
      </nav>

      <div className={styles.list}>
        {mock?.map((Itm, Idx) => (
          <Fragment key={Idx}>
            <div className={`${Idx == 0 ? styles.head : styles.body}`}>
              <span>{Itm.id && Itm.id}</span>
            </div>

            <div className={`${Idx == 0 ? styles.head : styles.body}`}>
              <span>{Itm.destino && Itm.destino}</span>
            </div>

            <div className={`${Idx == 0 ? styles.head : styles.body}`}>
              <span>{Itm.proveedor && Itm.proveedor}</span>
            </div>

            {Idx !== 0 ? (
              <div className={`${styles.actions} ${styles.body}`}>
                <button
                  onClick={() =>
                    router.push({
                      pathname: '/hoteles/editar',
                      query: {
                        id: Itm.id,
                        destino: Itm.destino,
                        proveedor: Itm.proveedor,
                      },
                    })
                  }
                >
                  Editar
                </button>
                <button
                  onClick={() => {
                    confirm(`Estas seguro de que deseas eliminar el destino "${Itm.destino}"`) == true ? '' : '';
                  }}
                >
                  Eliminar
                </button>
              </div>
            ) : (
              <div className={`${Idx == 0 ? styles.head : styles.body}`}>
                <span>Acciones</span>
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

///////////////////////////////////////////////

export { List };
