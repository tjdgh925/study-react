import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';


function App() {
  return (
    <Wrapper>
    <Hello name="장성호" color="green" isSpecial />
    <Hello color="blue" />
    </Wrapper>
  );
}

export default App;
