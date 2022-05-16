import {useParams} from 'react-router-dom';

const BlogDetails = () => {
  // Pega os parâmetros da url, similar ao express
  const {id} = useParams();

  return (
    <div className="blog-details">
      <h2>Blog details - {id}</h2>
    </div>
  );
};

export default BlogDetails;
