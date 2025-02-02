import { ContainerModule, interfaces } from 'inversify'
import DI_SYMBOLS from '@/libs/di/types'
import type { ISupabaseGateway } from './supabase.gateway'
import SupabaseGatewayImpl from './supabase.gateway.impl'

const initializeModule = (bind: interfaces.Bind) => {
  bind<ISupabaseGateway>(DI_SYMBOLS.ISupabaseGateway).to(SupabaseGatewayImpl)
}

const SupabaseGatewayModule = new ContainerModule(initializeModule)

export default SupabaseGatewayModule
