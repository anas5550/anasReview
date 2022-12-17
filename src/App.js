import React, { useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './mediaQuery.css';
import Brands from './Brands';
import Projects from './Projects';
import MyLearnings from './MyLearnings';
import Improvement from './Improvement';
import ConsiderMe from './ConsiderMe';
import Archives from './Archives';
import Footer from './Footer';
import Timeline from './Timeline';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Thankyou from './Thankyou';
import Timeline2 from './Timeline2';
import Introduction from './Introduction';
import LotMore from './LotMore';

function App() {



  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <div className="App">
      <Introduction />
      <Projects />
      <LotMore />
      <Brands />
      <MyLearnings />
      <Improvement />
      <ConsiderMe />
      {/* <Archives /> */}
      <Timeline />
      {/* <Timeline2 /> */}
      <Thankyou />
      <Footer />
    </div>
  );
}

export default App;
