import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Loader from './components/Loader'
import Report from './components/Report'

const Home = lazy(async () => await import('./pages/Home'))
const ElectronicGovernment = lazy(async () => await import('./pages/ElectronicGovernment'))

export default function App (): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/gobierno-electronico' element={<ElectronicGovernment />} />
            <Route path='/report/:id' element={<Report />} />
            <Route path='*' element={<h2 className='pages-section'>Error 404</h2>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}
