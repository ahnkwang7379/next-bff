const DI_SYMBOLS = {
  // Gateways
  ISupabaseGateway: Symbol.for('ISupabaseGateway'),

  // Repositories
  ITodoRepository: Symbol.for('ITodoRepository'),

  // Services
  ITodoService: Symbol.for('ITodoService'),
}

export default DI_SYMBOLS
