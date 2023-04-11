import React from 'react';

import { BookATrip, Destinations, Footer, Hero, Logo, Services, Subscribe, Testimonials} from './container'

import './App.scss';

function App() {
  return (
    <div className="App">
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
