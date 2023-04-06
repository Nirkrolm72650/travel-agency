import React from 'react';

import { Navbar } from './components'
import { BookATrip, Destinations, Footer, Hero, Logo, Services, Subscribe, Testimonials} from './container'

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <BookATrip />
      <Testimonials />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
