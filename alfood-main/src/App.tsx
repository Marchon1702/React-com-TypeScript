import { Routes, Route } from "react-router-dom";
import Home from "./paginas/Home";
import VitrineRestaurantes from "./paginas/VitrineRestaurantes";
import AdministracaoRestaurantes from "./paginas/admin/restaurantes/AdministracaoRestaurantes";
import FormularioRestaurante from "./paginas/admin/restaurantes/FormularioRestaurantes";
import PaginaBaseAdmin from "./paginas/admin/restaurantes/PaginaBaseAdmin";
import AdministracaoPratos from "./paginas/admin/pratos/AdministracaoPratos";
import FormularioPratos from "./paginas/admin/pratos/FormularioPratos";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />

      <Route path="/admin" element={<PaginaBaseAdmin />}>
        <Route
          path="restaurantes"
          element={<AdministracaoRestaurantes />}
        />
        <Route
          path="restaurantes/novo"
          element={<FormularioRestaurante />}
        />
        <Route
          path="restaurantes/:id"
          element={<FormularioRestaurante />}
        />
        <Route path="pratos" element={<AdministracaoPratos />}/>
        <Route path="pratos/novo" element={<FormularioPratos />}/>
        <Route path="pratos/:id" element={<FormularioPratos />}/>
      </Route>
    </Routes>
  );
}

export default App;
