import { createAsyncThunk } from '@reduxjs/toolkit'
import { AuthAPI, LoginCredentials, LoginFailed, RegisterCredentials, RegisterFailed } from '../../../api/auth.ts'
import { AxiosError } from 'axios'

export const register = createAsyncThunk(
	'auth/register',
	async (credentials: RegisterCredentials, { rejectWithValue }) => {
		try {
			// console.log(credentials)
			const { message } = await AuthAPI.register(credentials)
			return message
		} catch (e) {
			const err: AxiosError<RegisterFailed> = e as any
			if (!err.response) throw err
			return rejectWithValue(err.response.data.message)
		}
	}
)

export const login = createAsyncThunk(
	'auth/login',
	async (credentials: LoginCredentials, { rejectWithValue }) => {
		try {
			// console.log(credentials)
			const { access_token } = await AuthAPI.login(credentials)
			return access_token
		} catch (e) {
			const err: AxiosError<LoginFailed> = e as any
			if (!err.response) throw err
			return rejectWithValue(err.response.data.message)
		}
	}
)

