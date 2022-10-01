import { AxiosError } from 'axios';
import useSWR from 'swr';

type Post = {
  id: string;
  title: string;
  body: string;
};

const Posts: React.FC = () => {
  const { data, error } = useSWR<Post[], AxiosError>(
    'https://jsonplaceholder.typicode.com/posts'
  );

  return (
    <article>
      <h1>Posts</h1>
      {error ? (
        <p>
          {error.code} - {error.message}
        </p>
      ) : !data ? (
        <p>Now loading...</p>
      ) : data.length < 1 ? (
        <p>No Data</p>
      ) : (
        data.map((post) => (
          <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </article>
        ))
      )}
    </article>
  );
};

export default Posts;
