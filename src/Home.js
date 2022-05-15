import {useState} from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: 'Meu novo site',
      body: 'lorem ipsum...',
      author: 'Angela Caldas',
      id: 1
    },
    {
      title: 'Festa de boas vindas!',
      body: 'lorem ipsum...',
      author: 'Leon Kennedy',
      id: 2
    },
    {
      title: 'Dicas de desenvolvimento web',
      body: 'lorem ipsum...',
      author: 'Angela Caldas',
      id: 3
    }
  ]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="Todos os posts" />

      {/* Retornando apenas os posts de Angela através do método .filter() */}
      <BlogList
        blogs={blogs.filter(blog => blog.author === 'Angela Caldas')}
        title="Posts de Angela"
      />
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

Para montarmos essa estrutura, precisamos utilizar no elemento container uma propriedade chamada key, identificando cada item da array com um valor que seja único para cada um deles, para que o React consiga identificar cada item corretamente.
*/
