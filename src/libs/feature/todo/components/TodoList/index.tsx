import getTodoList from '@/libs/feature/todo/actions/getTodoList'
import TodoItem from '../TodoItem'

/**
 * @description
 * 간단한 투두 리스트 컴포넌트
 * 서버사이드에서 list를 받아와 렌더링
 */
export default async function TodoList() {
  const todoList = await getTodoList()

  return (
    <ul>
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          description={todo.description}
          isCompleted={todo.isCompleted}
          createdAt={todo.createdAt}
          updatedAt={todo.updatedAt}
        />
      ))}
    </ul>
  )
}
