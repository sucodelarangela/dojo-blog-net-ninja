import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Dojo Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">Novo post</Link>
      </div>
    </nav>
  );
};

export default Navbar;

/*
É possível utilizar CSS inline no JSX, mas ele funciona como um valor dinâmico, logo, deve ser adicionado entre {} para ser reconhecido como JSX e dentro de outro par de {} para ser reconhecido como objeto.

Dessa forma, toda propriedade CSS que possui separação com "-" deve ser escrita com camelCase para não ser confundida com a sintaxe JavaScript.

Exemplo:

<a href="/create"
  style={{
    color: 'white',
    backgroundColor: '#f1356d',
    borderRadius: '8px'
  }}
>Novo post</a>

*/
