import { injectable } from 'inversify'
import type { ISupabaseGateway } from './supabase.gateway'

@injectable()
class SupabaseGatewayImpl implements ISupabaseGateway {
  private baseUrl: string

  constructor() {
    this.baseUrl = process.env.SUPABASE_URL || ''
  }

  private headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    apiKey: process.env.SUPABASE_KEY || '',
  }

  private getHeaders(token?: string, additionalHeaders?: object) {
    if (token) {
      return {
        ...this.headers,
        ...additionalHeaders,
        Authorization: `Bearer ${token}`,
      }
    }
    return {
      ...this.headers,
      ...additionalHeaders,
    }
  }

  private genQueries(query?: object) {
    if (query === undefined) {
      return []
    }
    return Object.entries(query).map(([key, value]) => {
      if (Array.isArray(value))
        return value.map((v) => `${key}[]=${encodeURIComponent(v)}`).join('&')
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    })
  }

  // 기본 api 구조
  private api<T>(url: string, option: RequestInit & { params?: object }) {
    const { params, ...options } = option
    const queryArr = this.genQueries(params)

    return fetch(`${this.baseUrl}/${url}?${queryArr.join('&')}`, options).then(
      (response) => {
        if (!response.ok) {
          return response.json().then((json) => Promise.reject(json))
        }

        return response.json() as Promise<T>
      },
    )
  }

  get<T>(
    url: string,
    token?: string,
    queries?: object,
    additionalHeader?: object,
  ): Promise<T> {
    return this.api<T>(url, {
      headers: this.getHeaders(token, additionalHeader),
      method: 'GET',
      params: queries,
    })
  }

  put<T>(
    url: string,
    token?: string,
    data?: object,
    params?: object,
  ): Promise<T> {
    return this.api<T>(url, {
      method: 'PUT',
      headers: this.getHeaders(token),
      body: JSON.stringify(data),
      params: { ...params },
    })
  }

  post<T>(
    url: string,
    token?: string,
    data?: object,
    params?: object,
  ): Promise<T> {
    return this.api<T>(url, {
      method: 'POST',
      headers: this.getHeaders(token),
      body: JSON.stringify(data),
      params: { ...params },
    })
  }

  del<T>(url: string, token?: string, params?: object): Promise<T> {
    return this.api<T>(url, {
      method: 'DELETE',
      headers: this.getHeaders(token),
      params: { ...params },
    })
  }
}

export default SupabaseGatewayImpl
