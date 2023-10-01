import { instance } from './index.ts'

export interface LoginCredentials {
	email: string
	password: string
}

export interface RegisterCredentials extends LoginCredentials {
	username: string
}

export interface RegisterSuccess {
	message: string
	success: boolean
}

export interface RegisterFailed extends RegisterSuccess {
}

export interface LoginFailed extends RegisterFailed {
}

export interface LoginSuccess {
	access_token: string
	success: boolean
}

export class AuthAPI {
	static async register(credentials: RegisterCredentials) {
		const { data } = await instance.post<RegisterSuccess>('user/register', credentials)
		return data
	}

	static async login(credentials: LoginCredentials) {
		const { data } = await instance.post<LoginSuccess>('user/login', credentials)
		return data
	}
}
