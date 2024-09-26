// App.jsx
import { Route, Routes } from "react-router-dom";
import { Login } from "./Pages/Login/Login";
import { Index } from "./Pages/Index/Index";
import { Dashboard } from "./Pages/Dashboard/Dashboard"; // Importa el componente Dashboard
import Perfil from "./Pages/Perfil/Perfil"; // Importa el componente Perfil

function App() {
  return (
    <>
      {/* Rutas */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/inicio-sesion" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Ruta para Dashboard */}
        <Route path="/perfil" element={<Perfil />} /> {/* Nueva ruta para Perfil */}
        {/* Otras rutas si las tienes */}
      </Routes>
    </>
  );
}

export default App;
