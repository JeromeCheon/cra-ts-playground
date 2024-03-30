import styled from '@emotion/styled';
import { TodoItem } from '../TodoItem';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

interface Props {
  readonly toDoList: ReadonlyArray<string>; // 읽기 전용 문자열 리스트
  readonly onDelete?: (todo: string) => void;
}
export const TodoList = ({ toDoList, onDelete }: Props) => {
  return (
    <Container>
      {toDoList.map((todo) => (
        <TodoItem
          label={todo}
          key={todo}
          onDelete={() => {
            if (typeof onDelete === 'function') onDelete(todo);
          }}
        />
      ))}
    </Container>
  );
};
