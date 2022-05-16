import {useState} from 'react';

const Create = () => {
  // Criando states para salvar dados do form
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');

  return (
    <div className="create">
      <h2>Criar novo post</h2>
      <form>
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
        <button>Adicionar post</button>
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
  );
};

export default Create;
