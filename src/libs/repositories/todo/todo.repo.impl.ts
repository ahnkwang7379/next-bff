import { inject, injectable } from 'inversify'
import { ITodoRepository } from './todo.repo'
import DI_SYMBOLS from '@/libs/di/types'
import type { ISupabaseGateway } from '@/libs/gateways/supabase'
import { TodoListVO, TodoVO } from './vo/todo'

@injectable()
class TodoRepositoryImpl implements ITodoRepository {
  constructor(
    @inject(DI_SYMBOLS.ISupabaseGateway)
    private readonly supabaseGateway: ISupabaseGateway,
  ) {}

  getTodoById(id: number): Promise<TodoVO> {
    return this.supabaseGateway.get<TodoVO>(`/rest/v1/todo`, undefined, {
      id: `eq.${id}`,
    })
  }

  getTodoList(): Promise<TodoListVO> {
    return this.supabaseGateway.get<TodoListVO>(`/rest/v1/todo`)
  }
}

export default TodoRepositoryImpl
