import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Advice from './pages/Advice';
import Learn from './pages/Learn';
import Resources from './pages/Resources';
import Login from './pages/Login.tsx';
import StructuralFrame from './pages/StructuralFrame';
import HRFrame from './pages/HRFrame';
import PoliticalFrame from './pages/PoliticalFrame';
import SymbolicFrame from './pages/SymbolicFrame';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="advice" element={<Advice />} />
          <Route path="learn" element={<Learn />} />
          <Route path="resources" element={<Resources />} />
          <Route path="structural" element={<StructuralFrame />} />
          <Route path="hr" element={<HRFrame />} />
          <Route path="political" element={<PoliticalFrame />} />
          <Route path="symbolic" element={<SymbolicFrame />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;