'use server'

import { getInjection } from '@/libs/di/container'

const getTodoList = async () => {
  const todoService = getInjection('ITodoService')
  const todoList = await todoService.getTodoList()

  return todoList
}

export default getTodoList
