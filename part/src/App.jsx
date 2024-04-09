import { useState } from 'react';
import Header from './Header';
import Name from './Name';

function App() {
  let age = 30 - 5;
  return (
    <>
      <Header />
      <Name newName="Joyce" age={age.toString()} />
      <Name newName="Mena" />
      <Name newName="Cindy" />
    </>
    //1st age is the prop name and 2nd age with {} is invoking the variable (line 10)
    //REACT doesn't recognizes multiple elements so it returns one; divs or empty tags
  );
}

export default App;
// export to main.jsx (basically anywhere)
