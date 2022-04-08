import { useQuery } from 'react-query'
import { api } from '../services/api'

type User = {
  id: string
  name: string
  username: string
  email: string
  password: string
  gender: string
  year_of_birth: number
  company: string
  from: string
  state: string
  position: string
  is_admin: boolean
  is_disabled: boolean
  created_at: string
  updated_at: string
}

export async function getUsers(): Promise<User[]> {
  const { data } = await api.get<User[]>('users')

  const users = data.map((user) => ({
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
    password: user.password,
    gender: user.gender,
    year_of_birth: user.year_of_birth,
    company: user.company,
    from: user.from,
    state: user.state,
    position: user.position,
    is_admin: user.is_admin,
    is_disabled: user.is_disabled,
    created_at: new Date(user.created_at).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    }),
    updated_at: user.updated_at
  }))

  return users
}

export function useUsers() {
  return useQuery('users', getUsers)
}
