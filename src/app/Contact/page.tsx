


import Infor from '@/views/Home/Infor'
import Lastcntct from '@/views/Home/Lastcntct'
import React from 'react'
import Footer from '../Component/Layout/Footer'
import Navbar from '../Component/Layout/Navbar'
import Contactlocation from '@/views/Home/Contactlocation'

const page = () => {
  return (
    <div>
      <Navbar />
<Infor />
<Lastcntct />
<Contactlocation />
<Footer />
    </div>
  )
}

export default page