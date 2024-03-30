import styled from '@emotion/styled';
import { Title } from '../Title';
import { TodoList } from '../TodoList';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 32px;
  border-radius: 8px;
`;
interface Props {
  readonly toDoList: ReadonlyArray<string>; // 읽기 전용 문자열 리스트
  readonly onDelete?: (todo: string) => void;
}
export const DataView = ({ toDoList, onDelete }: Props) => {
  return (
    <Container>
      <Title label="할 일 목록" />
      <TodoList toDoList={toDoList} onDelete={onDelete} />
    </Container>
  );
};
