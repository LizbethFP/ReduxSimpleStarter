import React from 'react';
import Header from './Header';
import HobbyList from './Hobby-list';

const hobies = [];

const App = () => (
  <div>
    <Header/>
    <HobbyList pedro={hobies}/>
  </div>

  
)

export default App
