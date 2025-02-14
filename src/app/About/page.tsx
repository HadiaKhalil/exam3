
import React from 'react';
import Navbar from '../Component/Layout/Navbar';
import Footer from '../Component/Layout/Footer';

import Absec from '@/views/Home/Absec';
import Abother from '@/views/Home/Abother';
import Aboutend from '@/views/Home/Aboutend';
import Aboutthird from '@/views/Home/Aboutthird';
import Aboutfiv from '@/views/Home/Aboutfiv';



const Page = () => {
  return (
    <>
      
      <Navbar />
 <Absec />
 <Abother />
 <Aboutend />
<Aboutthird />
<Aboutfiv />
   
   
 
     <Footer />
    </>
  );
};

export default Page;
