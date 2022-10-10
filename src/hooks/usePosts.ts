import { useQuery } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';

export type Post = {
  id: string;
  title: string;
  body: string;
};

const usePosts = () =>
  useQuery<Post[], AxiosError>(['posts'], () =>
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.data)
  );

export default usePosts;
