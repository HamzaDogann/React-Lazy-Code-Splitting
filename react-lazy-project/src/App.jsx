import { Navigate, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'

import PreLoader from './components/PreLoader'
import Navbar from './components/Navbar'

const Home = lazy(() => import('./pages/Home'));
const Contact = lazy(() => import('./pages/Contact'));
const Projects = lazy(() => import('./pages/Projects'));
const About = lazy(() => import('./pages/About'));

import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <Routes>

        <Route path='/' element={<Suspense fallback={<PreLoader />}> <Home /></Suspense>} />
        <Route path='/about' element={<Suspense fallback={<PreLoader />}> <About /></Suspense>} />
        <Route path='/contact' element={<Suspense fallback={<PreLoader />}> <Contact /></Suspense>} />
        <Route path='/projects' element={<Suspense fallback={<PreLoader />}> <Projects /></Suspense>} />
        <Route path='/*' element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App
