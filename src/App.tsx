import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, NotFound, PerfectGel, Success } from "./views";
import Layout from "./layouts/Layout";
import PoliticasDePrivacidad from "./views/PoliticiasDePrivacidad";
import TerminosDelServicio from "./views/TerminosDelServicio";
import ProPress from "./views/ProPress";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Ruta para la página principal */}
          <Route path="/" element={<Home />} />
          {/* Ruta para la página de PerfectGel */}
          <Route path="/perfectgel" element={<PerfectGel />} />
          {/* Ruta para la página de ProPress */}
          <Route path="/propress" element={<ProPress />} />

          {/* Ruta para la página de éxito al pagar */}
          <Route path="/success" element={<Success />} />

          {/* Ruta para la página de Politicas y Terminos*/}
          <Route
            path="/politicas-de-privacidad"
            element={<PoliticasDePrivacidad />}
          />
          <Route
            path="/terminos-del-servicio"
            element={<TerminosDelServicio />}
          />

          {/* Ruta para páginas no encontradas */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
