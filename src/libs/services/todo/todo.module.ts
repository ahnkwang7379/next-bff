import DI_SYMBOLS from '@/libs/di/types'
import { ContainerModule, interfaces } from 'inversify'
import TodoServiceImpl from './todo.service.impl'
import { ITodoService } from './todo.service'

const initializeModule = (bind: interfaces.Bind) => {
  bind<ITodoService>(DI_SYMBOLS.ITodoService).to(TodoServiceImpl)
}

const TodoModule = new ContainerModule(initializeModule)

export default TodoModule
