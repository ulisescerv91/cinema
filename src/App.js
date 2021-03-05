
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.scss';

import HomeInterface from './Pages/Home/HomeInterface'

import requests from './utils/requests'

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/" exact> <HomeInterface fetchURL={requests.fetchTrending}/> </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
