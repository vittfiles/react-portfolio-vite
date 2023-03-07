import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {HashRouter, Route, Routes} from 'react-router-dom';
import Examples from './components/Examples';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Examples />}/>
          <Route path=':ej' element={<Examples />}/>
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
