import "./App.css";
import RespuestaSi from "./components/respuestaSi/RespuestaSi";
import RespuestaNo from "./components/respuestaNo/RespuestaNo";
import { Fragment } from "react";

const hoyEsNavidad = () => {
  const today = new Date();

  return today.getMonth() === 4 && today.getDate() === 26;
};

const obtenerMensaje = () => {
  if (hoyEsNavidad()) {
    return <RespuestaSi />;
  }
  return <RespuestaNo />;
};

const App = () => {
  return (
    <Fragment>
      {obtenerMensaje()}
    </Fragment>

  );
};

export default App;
