

import Hero from "./Hero";
import SecondSec from "./SectionSec";
import Layout from "@/app/Component/Layout"
import ServiceSec from "./ServiceSec";
import Other from "./Other";
import Lstcontact from "./Lstcontact";





const Home = () => {
  return (
    <Layout>
      <Hero />
<SecondSec />

<ServiceSec />
 <Lstcontact />
<Other />
    </Layout>
  );
};

export default Home;


