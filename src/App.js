import './App.css';
import Navbar from './Navbar';
import Home from './Home';

/*
Root component.
Também pode ser uma arrow function.
Deve ser exportado para index.js
*/

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
