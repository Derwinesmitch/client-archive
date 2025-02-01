import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './pages/Login.tsx'
import AddPage from './pages/Add.tsx'
import FrontPage from './pages/FrontPage.tsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import Archive from './pages/Archive.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element ={<Login />} />
          <Route path="/AddPage" element ={<AddPage />} />
          <Route path="/FrontPage" element ={<FrontPage />} />
          <Route path="/archive" element ={<Archive />} />

      </Routes>
    </BrowserRouter>   
  </StrictMode>,

)
