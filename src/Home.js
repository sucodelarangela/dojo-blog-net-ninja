import {useState} from 'react';

const Home = () => {
  // 1º valor: uma array de objetos
  // 2º valor:
  const [blogs, setBlogs] = useState([
    {title: 'Meu novo site', body: 'lorem ipsum...', author: 'Angela', id: 1},
    {
      title: 'Festa de boas vindas!',
      body: 'lorem ipsum...',
      author: 'Leon',
      id: 2
    },
    {
      title: 'Dicas de desenvolvimento web',
      body: 'lorem ipsum...',
      author: 'Teka',
      id: 3
    }
  ]);

  return (
    <div className="home">
      {/* Loop na array blogs com o método .map() */}
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Escrito por {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;

/*
Eventos de clique devem ser adicionados aos botões com a propriedade onClick={}, visto ser dinâmico. Entre {} não invocamos a função com (), apenas a referenciamos.

Caso precisemos referenciar uma função que tenha parâmetros, temos que fazê-lo com arrow functions.

Exemplo:
<button onClick={() => handleClickAgain('Angela')}>

Se precisarmos do evento da função, este parâmetro vai na função anônima. Exemplo:
<button onClick={(e) => handleClickAgain('Angela')}>
*/

/*
Para tornar mudanças de valores reativos, ou seja, que atualizam na visualização do app (ou template), usamos hooks, como useState. Exemplo:

const [name, setName] = useState('Angela');

No caso acima, o estado usa o valor atual de 'Angela' para a variável 'name'. O segundo valor da array é uma função que utilizaremos para mudar o valor de 'Angela' para 'Tereza', através de setName('Tereza')
*/

/*
Quando precisamos percorrer todos os itens de uma array para mostrar dinamicamente na página com React, podemos usar o método .map(), que realiza um forEach em cada item da array e retornará a estrutura que queremos montar na página com aquelas informações. Exemplo:
array.map( (item) => (
  // montar estrutura desejada
) )

Para montarmos essa estrutura, precisamos utilizar no elemento container uma propriedade chamada key, identificando cada item da array com um valor que seja único para cada um deles, para que o React consiga identificar cada item corretamente
*/
