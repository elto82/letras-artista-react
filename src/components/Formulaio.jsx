const Formulaio = () => {
  return (
    <div className="bg-info">
      <div className="container">
        <div className="row">
          <form className="col card text-white bg-transparent mb-5 pt-5 pb-2">
            <fieldset>
              <legend className="text-center">Buscador Letras Canciones</legend>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="artista">Artista</label>
                    <input
                      type="text"
                      className="form-control"
                      id="artista"
                      placeholder="Nombre Artista"
                      name="artista"
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
                    />
                  </div>
                </div>
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
