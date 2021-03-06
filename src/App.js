
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.scss';

import HomeInterface from './Pages/Home/HomeInterface'


function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/" exact> <HomeInterface/> </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
