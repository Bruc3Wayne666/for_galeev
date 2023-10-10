import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GetSelfPayload, Investment, User, UserPacketsPayload } from '../../../api/user.ts'
import { getSelf, getUserPackets, updateUser } from './userActions.ts'

interface UserState {
	investments_list: Investment[]
	user: User
	isLoading: boolean
	error: ''
}

const initialState: UserState = {
	investments_list: [],
	user: {} as User,
	isLoading: false,
	error: ''
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: {
		[getSelf.pending.type]: (state) => {
			state.isLoading = true
			state.error = ''
		},
		[getSelf.fulfilled.type]: (state, { payload }: PayloadAction<GetSelfPayload>) => {
			state.isLoading = false
			state.user = payload.user
		},
		[updateUser.pending.type]: (state) => {
			state.isLoading = true
			state.error = ''
		},
		[updateUser.fulfilled.type]: (state) => {
			state.isLoading = false
		},
		[getUserPackets.pending.type]: (state) => {
			state.isLoading = true
			state.error = ''
		},
		[getUserPackets.fulfilled.type]: (state, { payload }: PayloadAction<UserPacketsPayload>) => {
			state.isLoading = false
			state.investments_list = payload.investments_list
		}
	}
})

export const userActions = userSlice.actions
export default userSlice.reducer
