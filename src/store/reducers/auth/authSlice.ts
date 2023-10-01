import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { login, register } from './authActions.ts'

interface AuthState {
	isLoading: boolean
	error: ''
	token: string
}

const initialState: AuthState = {
	isLoading: false,
	error: '',
	token: ''
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout: (state) => {
			localStorage.removeItem('isAuth')
			localStorage.removeItem('token')
			state.isLoading = false
			state.error = ''
			state.token = ''
			window.location.href = '/'
		},
		setToken: (state) => {
			if (localStorage.getItem('token')) {
				state.token = localStorage.getItem('token') as string
			}
		}
	},
	extraReducers: {
		[register.pending.type]: (state) => {
			state.token = ''
			state.isLoading = true
			state.error = ''
		},
		[register.fulfilled.type]: (state, { payload }: PayloadAction<string>) => {
			state.isLoading = false
		},
		[register.rejected.type]: (state, { payload }: PayloadAction<string>) => {
			state.isLoading = false
			state.error = payload
		},
		[login.pending.type]: (state) => {
			state.isLoading = true
			state.error = ''
		},
		[login.fulfilled.type]: (state, { payload }: PayloadAction<string>) => {
			localStorage.setItem('isAuth', 'true')
			localStorage.setItem('token', payload)
			state.isLoading = false
			state.token = payload
			window.location.href = '/'
		},
		[login.rejected.type]: (state, { payload }: PayloadAction<string>) => {
			state.isLoading = false
			state.error = payload
		}
	}
})

export const authActions = authSlice.actions
export default authSlice.reducer
