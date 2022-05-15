import {useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
  // Declaramos 'blogs' como 'null' no useState para substituir esse valor pelo 'data' que retorna do 'fetch'
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  // useEffect() tem como parâmetro uma função anônima que busca informações do servidor no primeiro render da página (deoendency array vazia = carrega apenas no primeiro render)
  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setBlogs(data);
        setIsPending(false); //returns false when loaded
      });
  }, []);

  return (
    <div className="home">
      {/* If isPending returns true, shows div */}
      {isPending && <div>Loading...</div>}
      {/* Quando fazemos o fetch, a informação demora um pouco para retornar. Dessa forma, quando a página carrega, blogs retorna null (do useState) e temos um erro no console, pois o fetch ainda não retornou o data. Dessa forma, precisamos fazer a validação abaixo: se 'blogs' retornar 'false' o código não executa o trecho após '&&'. Porém, quando o fetch retorna o 'data', 'blogs' retorna 'true' e o trecho após && é executado, ativando o render do component BlogList */}
      {blogs && <BlogList blogs={blogs} title="Todos os posts" />}
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

/*
Para executarmos qualquer ação na página, utilizamos o método set de nossos states. Podemos criar uma função ára deletar um post e colocarmos dentro de setBlogs e passar para o componente filho através de props.
*/

/*
O hook useEffect roda uma função que é executada sempre que um componente é renderizado na página. Lembrando que essa renderização acontece sempre quando a página é carregada inicialmente e, também, sempre que algo muda com useState.

Pode ser usada sempre que precisamos buscar alguma informação (fetch data) ou fazer autenticações. É uma função que não fica guardada dentro de nenhuma variável e recebe uma função anônima como parâmetro. Deve ser chamada antes do return().

Para designar que a função rode apenas na primeira renderização, precisamos passar uma dependency array como segundo argumento, que nada mais é que `[]` uma array vazia.

Podemos colocar um estado específico como dependência do useEffect(), ou seja, o hook só funcionará no primeiro render e quando houver uma mudança de estado nesse useState() específico.
*/
