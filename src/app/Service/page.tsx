import React from 'react'
import Navbar from '../Component/Layout/Navbar'

import ServiseHero from '@/views/Home/ServiseHero'
import Serthird from '@/views/Home/Serthird'
import Forth from '@/views/Home/Forth';
import Questionpage from '@/views/Home/Questionpage'
import Lastservice from '@/views/Home/Lastservice'
import Footer from '../Component/Layout/Footer'
import Secondlastservice from '@/views/Home/Secondlastservice';

const page = () => {
  return (
    <div>
      <Navbar />
      <Forth />
      <Serthird />
      <ServiseHero />
<Questionpage />
  <Lastservice />
  <Secondlastservice />
  <Footer />
   
    </div>
  )
}

export default page