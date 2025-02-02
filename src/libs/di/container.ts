import { Container } from 'inversify'
import 'reflect-metadata'
import DI_SYMBOLS from './types'
import { IDiReturnTypes } from './returnTypes'

const ApplicationContainer = new Container({
  defaultScope: 'Singleton',
})

export const initializeContainer = () => {
  //
}

export const destroyContainer = () => {
  //
}

// 의존성 주입을 위한 헬퍼 함수
export function getInjection<K extends keyof typeof DI_SYMBOLS>(
  symbol: K,
): IDiReturnTypes[K] {
  return ApplicationContainer.get(DI_SYMBOLS[symbol])
}

initializeContainer()

export { ApplicationContainer }
