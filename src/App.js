import React from 'react';
import { Signup } from './Components';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Signup />
      </main>
    </div>
  );
}

export default App;
