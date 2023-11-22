import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListaCatador from './pages/lista-catador';
import Login from './pages/login'
import AcompanhamentoColeta from './pages/acompanhamento-coleta';
import Header from './components/header'
import HeaderLogin from './components/header-login';
import Admin from './pages/admin';
import { Toaster } from "react-hot-toast";
import Catador from './pages/catador';
import Associacao from './pages/associacao';
import OperadorLogistico from './pages/operadorLogistico';
import Perfil from './pages/perfil';
import { AutenticacaoGeral } from './config/AutenticacaoGeral';
import { ProtecaoAssociacao } from './config/ProtecaoAssociacao';
import { ProtecaoCatador } from './config/ProtecaoCatador';
import { ProtecaoAdmin } from './config/ProtecaoAdmin';
import { ProtecaoLogistica } from './config/ProtecaoLogistica';
import Logistica from './pages/logistica';
import ListaColeta from './pages/lista-coleta';
import RelatorioVenda from './pages/relatorio-vendas';
import ListaRelatorio from './pages/lista-relatorio';
import ListarAdministradores from './pages/lista-adm';
import ListarAssociacoes from './pages/lista-associacao';
import ListarTodosCatadores from './pages/lista-catador-all';


function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<React.Fragment><HeaderLogin /><Login /></React.Fragment>} />


          {/* Rota Geral */}
          <Route path="/" element={<AutenticacaoGeral />}>
            <Route path="/lista-catador" element={<React.Fragment><Header /><ListaCatador /></React.Fragment>} />
            <Route path="/lista-relatorio" element={<React.Fragment><Header /><ListaRelatorio /></React.Fragment>} />
            <Route path="/lista-admin" element={<React.Fragment><Header /><ListarAdministradores /></React.Fragment>} />
            <Route path="/lista-associacao" element={<React.Fragment><Header /><ListarAssociacoes /></React.Fragment>} />
            <Route path="/lista-catadores-adm" element={<React.Fragment><Header /><ListarTodosCatadores /></React.Fragment>} />
            <Route path="/lista-coleta" element={<React.Fragment><Header /><ListaColeta /></React.Fragment>} />
            <Route path="/logistica" element={<React.Fragment> <Header /> <Logistica /></React.Fragment>} />
            <Route path="/relatorio-vendas" element={<React.Fragment><Header /><RelatorioVenda /></React.Fragment>} />
          </Route>

          {/* Rota CATADOR */}
          <Route path="/" element={<ProtecaoCatador />}>
            <Route path="/perfil-catador" element={<React.Fragment><Header /><Catador /></React.Fragment>} />

            <Route path='/test' element={<React.Fragment><Header /><AcompanhamentoColeta /></React.Fragment>} />
          </Route>

          {/* Rota ASSOCIAÇÃO */}
          <Route path="/" element={<ProtecaoAssociacao />}>
            <Route path="/lista-catador" element={<React.Fragment><Header /><ListaCatador /></React.Fragment>} />
            <Route path="/perfil-associacao" element={<React.Fragment><Header /><Associacao /></React.Fragment>} />
          </Route>

          {/* Rota Admin */}
          <Route path="/" element={<ProtecaoAdmin />} />
          <Route path="/perfil-admin" element={<React.Fragment><Header /><Admin /></React.Fragment>} />

          {/* Rota LOGISTICA */}
          <Route path="/" element={<ProtecaoLogistica />}>
            <Route path="/perfil-associacao" element={<React.Fragment><Header /><Logistica /></React.Fragment>} />
          </Route>

          <Route path="/acompanhamento-coleta" element={<React.Fragment><Header /><AcompanhamentoColeta /></React.Fragment>} />
          <Route path="/usuario" element={<React.Fragment><Header /><Perfil /></React.Fragment>} />
          <Route path="/acompanhamento-coleta" element={<React.Fragment><Header /><AcompanhamentoColeta /></React.Fragment>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;