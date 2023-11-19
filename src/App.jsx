import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListaCatador from './pages/lista-catador';
import Login from './pages/login'
import AcompanhamentoColeta from './pages/acompanhamento-coleta';
import Header from './components/header'
import Admin from './pages/admin';
import { Toaster } from "react-hot-toast";
import Catador from './pages/catador';
import Associacao from './pages/associacao';
import OperadorLogistico from './pages/operadorLogistico';
import Perfil from './pages/perfil';
import { ProtecaoAssociacao } from './config/ProtecaoAssociacao';
import { ProtecaoCatador } from './config/ProtecaoCatador';
import { ProtecaoAdmin } from './config/ProtecaoAdmin';
import { ProtecaoLogistica } from './config/ProtecaoLogistica';
import Logistica from './pages/logistica';
import ListaColeta from './pages/lista-coleta';
import ListaRelatorio from './pages/lista-relatorio';


function App() {
  return (
    <>
    <Toaster />
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/lista-relatorio" element={<ListaRelatorio />} />

        {/* Rota CATADOR */}
        <Route path="/" element={<ProtecaoCatador />}>
          <Route path="/perfil-catador" element={<Catador />} />
          <Route path="/lista-coleta" element={<ListaColeta/>} />
          <Route path='/test' element={<AcompanhamentoColeta/>} />
        </Route>
        
        {/* Rota ASSOCIAÇÃO */}
        <Route path="/" element={<ProtecaoAssociacao />}>
          <Route path="/perfil-associacao" element={<Associacao />} />
          <Route path="/lista-catador" element={<ListaCatador/>} />
        </Route>
        
        {/* Rota Admin */}
        <Route path="/" element={<ProtecaoAdmin />}>
          <Route path="/perfil-admin" element={<Admin />} />
        </Route>

        {/* Rota LOGISTICA */}
        <Route path="/" element={<ProtecaoLogistica />}>
          <Route path="/perfil-associacao" element={<Logistica />} />
        </Route>

        <Route path="/acompanhamento-coleta" element={<AcompanhamentoColeta />} />
        <Route path="/usuario" element={<Perfil />} />
        <Route path="/acompanhamento-coleta" element={<AcompanhamentoColeta />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;