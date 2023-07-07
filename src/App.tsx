import { ReactElement, Suspense, lazy } from 'react'
import { Route } from 'wouter'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loader from './components/Loader'
import Report from './components/Report'

const Home = lazy(async () => await import('./pages/Home'))
const ElectronicGovernment = lazy(async () => await import('./pages/ElectronicGovernment'))
const Licenses = lazy(async () => await import('./pages/Licenses'))
const Commerce = lazy(async () => await import('./pages/Commerce'))
const Stats = lazy(async () => await import('./pages/Stats'))

export default function App (): ReactElement {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Route path='/' component={Home} />
        <Route path='/gobierno-electronico' component={ElectronicGovernment} />
        <Route path='/licencias' component={Licenses} />
        <Route path='/comercio' component={Commerce} />
        <Route path='/balances' component={Stats} />
      </Suspense>
      <Route path='/report/:id' component={Report} />
      <Footer />
    </>
  )
}
