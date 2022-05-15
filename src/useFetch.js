import {useState, useEffect} from 'react';

// criando um custom hook usando o mesmo código de useFetch do componente Home, mas com algumas alterações
const useFetch = url => {
  // Declaramos 'data' como 'null' no useState para substituir esse valor pelo 'data' que retorna do 'fetch'
  const [data, setData] = useState(null); //blogs virou data
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // useEffect() tem como parâmetro uma função anônima que busca informações de uma url fornecida
  useEffect(() => {
    fetch(url)
      .then(res => {
        // Checa erros
        if (!res.ok) {
          throw Error(
            'Não foi possível encontrar informações sobre esse recurso.'
          );
        }
        return res.json();
      })
      .then(data => {
        setData(data);
        setIsPending(false); //returns false when loaded
        setError(null);
      })
      .catch(err => {
        setError(err.message);
        setIsPending(false);
      });
  }, [url]);

  return {data, isPending, error};
};

export default useFetch;

/*
Para reaproveitarmos o código do useEffect que criamos no component Home, resolvemos criar um custom hook chamado useFetch().

Algumas alterações foram necessárias para ajustar a funcionalidade para reaproveitamento:
- a url do fetch agora é passada como parâmetro do hook useFetch(url). Dessa forma, dependendo de onde o código for aplicado, podemos informar url's diferentes para obter informações;
- Esse mesmo parâmetro deverá ser colocado no dependency array, para que sempre que a url for mudada, ela desencadear um novo render do template com os novos dados;
- Mudaremos o useState blogs, para data, visto que dessa forma fica mais semântico e com melhor entendimento por terceiros;
- Precisamos exportar essa função e a mesma deve retornar os valores dos estados de useState (nesse caso, "data", "isPending" e "error")
*/
