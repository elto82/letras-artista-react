import { useState } from "react";

const Formulaio = ({ setBusquedaLetra }) => {
  const [error, setError] = useState(false);
  const [busqueda, setBusqueda] = useState({
    artista: "",
    cancion: "",
  });

  const { artista, cancion } = busqueda;

  const handleBusqueda = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  const handleBuscarInfo = (e) => {
    e.preventDefault();

    if (artista.trim() === "" || cancion.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    setBusquedaLetra(busqueda);
  };

  return (
    <div className="bg-info">
      <div className="container">
        <div className="row">
          <form
            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
            onSubmit={handleBuscarInfo}
          >
            <fieldset>
              <legend className="text-center">Buscador Letras Canciones</legend>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="artista">Artista</label>
                    <input
                      onChange={handleBusqueda}
                      type="text"
                      className="form-control"
                      id="artista"
                      placeholder="Nombre Artista"
                      name="artista"
                      value={artista}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="cancion">Cancíon</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cancion"
                      placeholder="Nombre Canción"
                      name="cancion"
                      onChange={handleBusqueda}
                      value={cancion}
                    />
                  </div>
                </div>
                {error && (
                  <p className="alert alert-primary text-center p-2 ml-4">
                    Todos los campos son obligatorios
                  </p>
                )}
              </div>
              <button
                type="submit"
                className=" mt-3 mb-3 col-md-3  btn btn-primary float-right"
              >
                Buscar
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulaio;
