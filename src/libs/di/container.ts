import { Container } from 'inversify'
import 'reflect-metadata'

const ApplicationContainer = new Container({
  defaultScope: 'Singleton',
})

export const initializeContainer = () => {
  //
}

export const destroyContainer = () => {
  //
}

initializeContainer()

export { ApplicationContainer }
