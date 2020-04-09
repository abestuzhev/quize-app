import React from 'react';
import logo from './logo.svg';
import Layout from './hoc/Layout/Layout';
import Quize from './containers/Quize/Quize.js';

function App() {
  return (
    <div className="App">
      <Layout>
         <Quize />
      </Layout>
    </div>
  );
}

export default App;
