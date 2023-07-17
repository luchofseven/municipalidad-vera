import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loader from './components/Loader'
import Report from './components/Report'

const Home = lazy(async () => await import('./pages/Home'))
const ElectronicGovernment = lazy(async () => await import('./pages/ElectronicGovernment'))
const Licenses = lazy(async () => await import('./pages/Licenses'))
const Commerce = lazy(async () => await import('./pages/Commerce'))
const Stats = lazy(async () => await import('./pages/Stats'))

export default function App (): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/gobierno-electronico' element={<ElectronicGovernment />} />
            <Route path='/licencias' element={<Licenses />} />
            <Route path='/comercio' element={<Commerce />} />
            <Route path='/balances' element={<Stats />} />
            <Route path='/report/:id' element={<Report />} />
            <Route path='*' element={<h2>Error 404</h2>} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </>
  )
}
