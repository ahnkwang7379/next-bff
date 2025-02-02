import { Todo } from '@/libs/models/todo/todo'

type TodoItemProps = Todo

export default function TodoItem({ id, title, description }: TodoItemProps) {
  return (
    <li>
      {id} {title} {description}
    </li>
  )
}
