import './App.css';
import styled from '@emotion/styled';
import { Header } from './components/Header';
import { BlogPost } from './components/BlogPost';
import { useEffect, useState } from 'react';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #eeeeee;
  overflow: scroll;
`;

interface Post {
  readonly id: number;
  readonly userId: number;
  readonly title: string;
  readonly body: string;
}
function App() {
  const [posts, setPosts] = useState<ReadonlyArray<Post>>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setPosts(json))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Container>
      <Header />
      {posts.map((post) => (
        <BlogPost title={post.title} body={post.body} key={post.id} />
      ))}
    </Container>
  );
}

export default App;
