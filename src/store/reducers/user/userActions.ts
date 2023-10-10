import { createAsyncThunk } from '@reduxjs/toolkit'
import { UpdateUserParams, UserAPI } from '../../../api/user.ts'

export const getSelf = createAsyncThunk(
	'user/getSelf',
	async (_, { rejectWithValue }) => {
		try {
			return await UserAPI.self()
		} catch (e) {
			return rejectWithValue(e)
		}
	}
)

export const updateUser = createAsyncThunk(
	'user/updateUser',
	async (params: UpdateUserParams, { rejectWithValue }) => {
		try {
			return await UserAPI.update(params)
		} catch (e) {
			return rejectWithValue(e)
		}
	}
)

export const getUserPackets = createAsyncThunk(
	'user/getUserPackets',
	async (_, { rejectWithValue }) => {
		try {
			return await UserAPI.getPackets()
		} catch (e) {
			return rejectWithValue(e)
		}
	}
)

