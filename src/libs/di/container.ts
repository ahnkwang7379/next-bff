import { Container } from 'inversify'
import 'reflect-metadata'
import DI_SYMBOLS from './types'
import { IDiReturnTypes } from './returnTypes'
import gatewayModules from './gateways'
import serviceModule from './services'
import repositoryModules from './repositories'

const ApplicationContainer = new Container({
  defaultScope: 'Singleton',
})

export const initializeContainer = () => {
  // GateWays
  gatewayModules.forEach((module) => ApplicationContainer.load(module))

  // Service
  serviceModule.forEach((module) => ApplicationContainer.load(module))

  // Repository
  repositoryModules.forEach((module) => ApplicationContainer.load(module))
}

export const destroyContainer = () => {
  // GateWays
  gatewayModules.forEach((module) => ApplicationContainer.unload(module))

  // Service
  serviceModule.forEach((module) => ApplicationContainer.unload(module))

  // Repository
  repositoryModules.forEach((module) => ApplicationContainer.unload(module))
}

// 의존성 주입을 위한 헬퍼 함수
export function getInjection<K extends keyof typeof DI_SYMBOLS>(
  symbol: K,
): IDiReturnTypes[K] {
  return ApplicationContainer.get(DI_SYMBOLS[symbol])
}

initializeContainer()

export { ApplicationContainer }
