import { useState } from 'react'
import './App.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { BrowserRouter } from 'react-router-dom';
import { IndexRouter } from './router/IndexRouter';

function App() {
  return (
    <>
      <BrowserRouter>
        <IndexRouter></IndexRouter>
      </BrowserRouter>
    </>
  )
}
export default App
