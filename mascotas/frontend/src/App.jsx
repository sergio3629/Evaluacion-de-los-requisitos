import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/login';
import Listar from './pages/listar';
import 'tailwindcss/tailwind.css';
import Registrar from './pages/registrar';
import Actualizar from './pages/actualizar';
import Buscar from './pages/buscar';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Listar" element={<Listar />} />
        <Route path="/Registrar" element={<Registrar />} />
        <Route path="/Actualizar/:id_mascota" element={<Actualizar />} />
        {/* Ajusta la ruta para incluir el parámetro id_mascota */}
        <Route path="/Buscar/:id_mascota" element={<Buscar />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
