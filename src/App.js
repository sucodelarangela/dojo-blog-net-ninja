import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

/*
Root component.
Também pode ser uma arrow function.
Deve ser exportado para index.js
*/

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            {/* Rota para o id de cada post usando parâmetros da url, como no express */}
            <Route path="/blogs/:id" element={<BlogDetails />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
