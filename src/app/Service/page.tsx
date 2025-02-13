import React from 'react'
import Navbar from '../Component/Layout/Navbar'
import AboutHero from '@/views/Home/AboutHero'
import ServiseHero from '@/views/Home/ServiseHero'
import Serthird from '@/views/Home/Serthird'
import Forth from '@/views/Home/Forth';
import Questionpage from '@/views/Home/Questionpage'
import Lastservice from '@/views/Home/Lastservice'
import Footer from '../Component/Layout/Footer'

const page = () => {
  return (
    <div>
      <Navbar />
      <Forth />
      <Serthird />
      <ServiseHero />
<Questionpage />
  <Lastservice />
  <Footer />
   
    </div>
  )
}

export default page