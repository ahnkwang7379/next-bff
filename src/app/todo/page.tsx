import TodoList from '@/libs/feature/todo/components/TodoList'
import { Suspense } from 'react'
import Skeleton from 'react-loading-skeleton'

/**
 * @description
 * 투두 리스트 보여줄 페이지
 */
export default function TodoPage() {
  return (
    <section>
      <Suspense fallback={<Skeleton width={300} height={300} />}>
        <TodoList />
      </Suspense>
    </section>
  )
}
