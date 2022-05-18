import {useNavigate, useParams} from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
  // Pega os parâmetros da url, similar ao express
  const {id} = useParams();

  // usando o custom hook useFetch
  const {
    data: blog,
    error,
    isPending
  } = useFetch('http://localhost:8000/blogs/' + id);

  const navigate = useNavigate();

  function handleClick() {
    // deletar um post
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      navigate('/');
    });
  }

  return (
    <div className="blog-details">
      {/* Verificação: se o loading estiver pendente, adiciona a mensagem */}
      {isPending && <div>Loading...</div>}
      {/* Verificação: se houver um erro, mostra o erro em tela */}
      {error && <div>{error}</div>}
      {/* Verificação: se houver um post na API, cria o article e insere seu conteúdo */}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Escrito por {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Deletar post</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
