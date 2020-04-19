import React from 'react';
import Layout from './hoc/Layout/Layout';
import Quize from './containers/Quize/Quize.js';
import {Route, Switch} from 'react-router-dom'
import QuizeList from './containers/QuizeList/QuizeList'
import QuizeCreator from './containers/QuizeCreator/QuizeCreator'
import Auth from './containers/Auth/Auth'

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/auth' component={Auth}/>
          <Route path='/quize-creator' component={QuizeCreator}/>
          <Route path='/quize/:id' component={Quize}/>
          <Route path='/' exact component={QuizeList}/>
        </Switch>
        
      </Layout>
    </div>
  );
}

export default App;
