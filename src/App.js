
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.scss';

import HomeInterface from './Pages/Home/HomeInterface'
import DataState from './utils/Context/Data/DataState'
import Movie from './Pages/Movie/Movie';

function App() {
  return (
    <DataState>
      <div className="App">
        <Router>
            <Switch>
              <Route path="/" exact> <HomeInterface/> </Route>
              <Route path="/movie" exact> <Movie/> </Route>

            </Switch>
          </Router>
      </div>
    </DataState>
  );
}

export default App;
