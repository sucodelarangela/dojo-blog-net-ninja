import './App.css';

/*
Root component.
Também pode ser uma arrow function.
Deve ser exportado para index.js
*/

function App() {
  const title = 'Bem vindo ao blog';
  const likes = '50';
  const link = 'https://www.google.com';

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Curtido por {likes} pessoas</p>
        <p>{10}</p>
        <p>{'Hello, ninjas'}</p>
        <p>{[1, 2, 3, 4, 5]}</p>
        <p>{Math.round(Math.random() * 10)}</p>

        <a href={link}>Google site</a>
      </div>
    </div>
  );
}

export default App;
