import React from 'react'
import Navbar from '../components/Navbar'

import Carousel from '../components/Carousel'
import Companieslogos from '../components/Companieslogos'
import Projectscounter from '../components/Projectscounter'
import Hipa from '../components/Hipa'
import Whychoose from '../components/Whychoose'
import Whatwedo from '../components/Whatwedo'
import Process from '../components/Process'
import Benefits from '../components/Benefits'
export default function Home() {
  return (
    <div>
      <Carousel />
      {/* <Hero/> */}
      <Projectscounter/>
      <Hipa/>
      <Whychoose/>
      <Companieslogos/>
      <Process/>
      <Whatwedo/>
      <Benefits/>
    </div>
  )
}
