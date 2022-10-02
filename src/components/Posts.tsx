import usePosts from '../hooks/usePosts';

const Posts: React.FC = () => {
  const { isLoading, data, error } = usePosts();

  return (
    <article>
      <h1>Posts</h1>
      {error ? (
        <p>{error.message}</p>
      ) : isLoading ? (
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
