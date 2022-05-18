import {Link} from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Desculpe</h2>
      <p>Esta página não foi encontrada</p>
      <Link to="/">Voltar para a página principal...</Link>
    </div>
  );
};

export default NotFound;
