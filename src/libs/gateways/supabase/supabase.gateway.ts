export interface ISupabaseGateway {
  get<T>(
    url: string,
    token?: string,
    queries?: object,
    additionalHeaders?: object,
  ): Promise<T>
  put<T>(
    url: string,
    token?: string,
    data?: object,
    params?: object,
  ): Promise<T>
  post<T>(
    url: string,
    token?: string,
    data?: object,
    params?: object,
  ): Promise<T>
  del<T>(url: string, token?: string, params?: object): Promise<T>
}
