import DI_SYMBOLS from '@/libs/di/types'
import { Todo } from '@/libs/models/todo/todo'
import type { ITodoRepository } from '@/libs/repositories/todo'
import { inject, injectable } from 'inversify'
import { mapToTodo } from './mapper/mapToTodo'

@injectable()
class TodoServiceImpl implements TodoServiceImpl {
  constructor(
    @inject(DI_SYMBOLS.ITodoRepository)
    private todoRepository: ITodoRepository,
  ) {}

  async getTodoById(id: number): Promise<Todo> {
    const res = await this.todoRepository.getTodoById(id)

    // mapping해서 실제로 서비스에서 사용하는 데이터 타입으로 변경
    return mapToTodo(res)
  }

  async getTodoList(): Promise<Todo[]> {
    const res = await this.todoRepository.getTodoList()

    // 리스트 데이터를 mapToTodo로 매핑
    return res.map(mapToTodo)
  }
}

export default TodoServiceImpl
