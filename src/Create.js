import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Create = () => {
  // Criando states para salvar dados do form
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();

    const blog = {title, body, author};

    setIsPending(true);

    // POST request para o json-server. Não precisamos indicar um id, pois o json-server cria um id automaticamente
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('Novo post adicionado');
      setIsPending(false);
      navigate('/');
    });
  };

  return (
    <div className="create">
      <h2>Criar novo post</h2>
      <form onSubmit={handleSubmit}>
        <label>Título do post:</label>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <label>Conteúdo do post:</label>
        <textarea
          value={body}
          onChange={e => setBody(e.target.value)}
          required
        ></textarea>
        <label>Autor do post:</label>
        <select value={author} onChange={e => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>

        {/* Mostrando ou não mensagem de loading na criação do post */}
        {!isPending && <button>Adicionar post</button>}
        {isPending && <button disabled>Criando post...</button>}
      </form>
    </div>
  );
};

export default Create;
