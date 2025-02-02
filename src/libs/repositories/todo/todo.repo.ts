import { TodoListVO, TodoVO } from './vo/todo'

export interface ITodoRepository {
  // get
  getTodoById(id: number): Promise<TodoVO>
  getTodoList(): Promise<TodoListVO>
}
