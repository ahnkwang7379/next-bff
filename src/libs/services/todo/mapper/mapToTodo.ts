import { Todo } from '@/libs/models/todo/todo'
import { TodoVO } from '@/libs/repositories/todo/vo/todo'

/**
 * @description
 * TodoVO를 실제 서비스에서 사용하는 Model에 맞는 Todo로 변환
 */
export const mapToTodo = (entity: TodoVO): Todo => {
  return {
    id: entity.id,
    title: entity.title,
    description: entity.description,
    isCompleted: entity.check,
    createdAt: new Date(entity.created_at),
    updatedAt: new Date(entity.updated_at),
  }
}
