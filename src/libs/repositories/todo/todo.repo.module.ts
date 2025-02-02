import { ContainerModule, interfaces } from 'inversify'
import { ITodoRepository } from './todo.repo'
import DI_SYMBOLS from '@/libs/di/types'
import TodoRepositoryImpl from './todo.repo.impl'

const initializeTodoRepository = (bind: interfaces.Bind) => {
  bind<ITodoRepository>(DI_SYMBOLS.ITodoRepository).to(TodoRepositoryImpl)
}

const TodoRepositoryModule = new ContainerModule(initializeTodoRepository)

export default TodoRepositoryModule
