import "./App.css";
import RespuestaSi from "./components/respuestaSi/RespuestaSi";
import RespuestaNo from "./components/respuestaNo/RespuestaNo";
import { Fragment } from "react";
 
const hoyEsNavidad = () => {
  const today = new Date();

  return today.getMonth() === 11 && today.getDate() === 25;
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
