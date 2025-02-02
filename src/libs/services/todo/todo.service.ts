import { Todo } from '@/libs/models/todo/todo'

export interface ITodoService {
  getTodoById(id: number): Promise<Todo>
  getTodoList(): Promise<Todo[]>
}
