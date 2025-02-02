const DI_SYMBOLS = {
  // Gateways
  ISupabaseGateway: Symbol.for('SupabaseGateway'),

  // Repositories
  ITodoRepository: Symbol.for('TodoRepository'),

  // Services
  ITodoService: Symbol.for('TodoService'),
}

export default DI_SYMBOLS
