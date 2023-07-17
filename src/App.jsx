import { useEffect, useState } from "react";
import Formulaio from "./components/Formulaio";
import Cancion from "./components/Cancion";
import axios from "axios";
import Info from "./components/Info";

const App = () => {
  const [busquedaLetra, setBusquedaLetra] = useState({});
  const [letra, setLetra] = useState("");
  const [info, setInfo] = useState({});
  const [letraError, setLetraError] = useState(false);
  const [infoError, setInfoError] = useState(false);

  useEffect(() => {
    if (Object.keys(busquedaLetra).length === 0) return;
    const consularApiLetra = async () => {
      try {
        const { artista, cancion } = busquedaLetra;
        const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
        const url2 = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artista}`;

        const [letraResponse, infoResponse] = await Promise.all([
          axios(url).catch((error) => {
            console.log("Error en la consulta de la letra:", error.message);
            setLetraError(true);
            return { data: { lyrics: "" } };
          }),
          axios(url2).catch((error) => {
            console.log(
              "Error en la consulta de la información del artista:",
              error.message
            );
            setInfoError(true);
            return { data: { artists: [{ strArtistThumb: "" }] } };
          }),
        ]);

        setLetra(letraResponse.data.lyrics);
        setInfo(infoResponse.data.artists[0].strArtistThumb);
        setLetraError(false);
        setInfoError(false);
      } catch (error) {
        console.log("Error en las consultas:", error.message);
        setLetraError(true);
        setInfoError(true);
      }
    };

    consularApiLetra();
  }, [busquedaLetra]);

  return (
    <>
      <Formulaio setBusquedaLetra={setBusquedaLetra} />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            {infoError ? (
              <p>Error en la consulta de información del artista.</p>
            ) : (
              <Info info={info} />
            )}
          </div>
          <div className="col-md-6">
            {letraError ? (
              <p>Error en la consulta de la letra de la canción.</p>
            ) : (
              <Cancion letra={letra} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
