// import AboutHero from '@/views/Home/AboutHero';
import React from 'react';
import Navbar from '../Component/Layout/Navbar';
import Footer from '../Component/Layout/Footer';

import Absec from '@/views/Home/Absec';
import Abother from '@/views/Home/Abother';
import Aboutend from '@/views/Home/Aboutend';
import Aboutthird from '@/views/Home/Aboutthird';



const Page = () => {
  return (
    <>
      <Navbar />
 {/* <AboutHero /> */}
 <Absec />
<Aboutthird />
    <Aboutend />
    <Abother />
 
     <Footer />
    </>
  );
};

export default Page;
