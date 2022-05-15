import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; //importing destructured react router

/*
Root component.
Também pode ser uma arrow function.
Deve ser exportado para index.js
*/

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
