const BlogList = ({blogs, title}) => {
  // se desestruturamos os props, não precisamos chamá-los da forma abaixo
  // const blogs = props.blogs;
  // const title = props.title;

  return (
    <div className="blog-list">
      <h2>{title}!</h2>
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

export default BlogList;

/*
Quando percorremos uma array para gerar código, estamos lidando com repetições. Nesse caso, podemos reaproveitar essa repetição criando um novo componente para tal. O código do loop que havia dentro de Home apra criar a estrutura de lista deu origem a um novo componente chamado BlogList, que pode ser reaproveitado no blog, por exemplo, em uma página de resposta de uma search bar
*/

/*
Quando trouxemos o código de Home para BlogList, tivemos um erro, pois a variável 'blog' não pode ser encontrada no componente BlogList, visto que ela foi declarada no componente Home. Para resolver isso, usaremos os Props do React.
*/

/*
Props são maneiras de passar informações (variáveis) de um componente pai para um componente filho. Exemplo:
- No componente pai Home temos uma variável blogs;
- No componente filho BlogList temos que receber essa variável blogs;
- Dentro do componente Home, passamos essa variável em forma de propriedade do componente filho BlogList: `<BlogList blogs={blogs}`
- Dentro do componente BlogList, chamamos essa propriedade colocando `props` como parâmetro: `const BlogList = (props) => {}`
- Também é possível desestruturar o props, caso tenhamos mais de uma propriedade que queiramos compartilhar, por exemplo, `const BlogList = ({blogs}) => {}`
*/
