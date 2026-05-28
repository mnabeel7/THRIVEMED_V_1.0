import React, { Suspense, lazy } from 'react'
import Carousel from '../components/Carousel'
import Projectscounter from '../components/Projectscounter'

const Hipa = lazy(() => import('../components/Hipa'))
const Whychoose = lazy(() => import('../components/Whychoose'))
const Companieslogos = lazy(() => import('../components/Companieslogos'))
const Process = lazy(() => import('../components/Process'))
const Whatwedo = lazy(() => import('../components/Whatwedo'))
const Benefits = lazy(() => import('../components/Benefits'))

export default function Home() {
  return (
    <div>
      <Carousel />
      <Projectscounter/>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div></div>}>
        <Hipa/>
        <Whychoose/>
        <Companieslogos/>
        <Process/>
        <Whatwedo/>
        <Benefits/>
      </Suspense>
    </div>
  )
}
