import './App.css';
import styled from '@emotion/styled';
import { Header } from './components/Header';
import { BlogPost } from './components/BlogPost';
import { useEffect, useState } from 'react';
import { Button } from './components/Button';
import { Form } from './Form';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #eeeeee;
  overflow: scroll;
`;

const ButtonContainer = styled.div`
  position: absolute;
  right: 40px;
  bottom: 40px;
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
      <ButtonContainer>
        <Button label="등록" />
      </ButtonContainer>
      <Form />
    </Container>
  );
}

export default App;
