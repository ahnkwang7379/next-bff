import type { ISupabaseGateway } from '@/libs/gateways/supabase/supabase.gateway'
import type { ITodoService } from '@/libs/services/todo'
import type { ITodoRepository } from '@/libs/repositories/todo'

export interface IDiReturnTypes {
  // Gateways, Services, Repositories 인터페이스 정리
  ISupabaseGateway: ISupabaseGateway
  ITodoService: ITodoService
  ITodoRepository: ITodoRepository
}
