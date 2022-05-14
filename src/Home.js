import {useState} from 'react';

const Home = () => {
  // let name = 'Angela';
  const [name, setName] = useState('Angela');
  const [age, setAge] = useState(37);

  const handleClick = () => {
    // name = 'Tereza';
    setName('Tereza');
    setAge(39);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>
        {name} tem {age} anos de idade.{' '}
      </p>
      <button onClick={handleClick}>Clique aqui</button>
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
