const Home = () => {
  const handleClick = e => {
    alert('Olá, ninjas', e);
  };

  const handleClickAgain = name => {
    alert('Olá, ' + name);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Clique aqui</button>
      <button onClick={() => handleClickAgain('Angela')}>
        Clique aqui também
      </button>
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
