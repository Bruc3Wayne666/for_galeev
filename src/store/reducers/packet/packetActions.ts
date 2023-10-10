import { createAsyncThunk } from '@reduxjs/toolkit'
import { BuyParams, PacketAPI } from '../../../api/packet.ts'

export const getPackets = createAsyncThunk(
	'packet/getAll',
	async (_, { rejectWithValue }) => {
		try {
			return await PacketAPI.get()
		} catch (e) {
			// const err: AxiosError<RegisterFailed> = e as any
			// if (!err.response) throw err
			// return rejectWithValue(err.response.data.message)
			return rejectWithValue(e)
		}
	}
)

export const buyPacket = createAsyncThunk(
	'packet/buyPacket',
	async (params: BuyParams, { rejectWithValue }) => {
		try {
			return await PacketAPI.buy(params)
		} catch (e) {
			// const err: AxiosError<RegisterFailed> = e as any
			// if (!err.response) throw err
			// return rejectWithValue(err.response.data.message)
			return rejectWithValue(e)
		}
	}
)
