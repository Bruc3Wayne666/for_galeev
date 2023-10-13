import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Packet, PacketPayload } from '../../../api/packet.ts'
import { buyPacket, getPackets } from './packetActions.ts'

interface PacketState {
	packets: Packet[]
	isLoading: boolean
	error: ''
}

const initialState: PacketState = {
	packets: [],
	isLoading: false,
	error: ''
}

const packetSlice = createSlice({
	name: 'packet',
	initialState,
	reducers: {},
	extraReducers: {
		[getPackets.pending.type]: (state) => {
			state.isLoading = true
			state.error = ''
		},
		[getPackets.fulfilled.type]: (state, { payload }: PayloadAction<PacketPayload>) => {
			state.isLoading = false
			state.packets = payload.packets
		},
		[getPackets.rejected.type]: (state) => {
			state.isLoading = false
			localStorage.removeItem('isAuth')
			localStorage.removeItem('token')
			state.isLoading = false
			state.error = ''
			window.location.href = '/'
		},
		[buyPacket.pending.type]: (state) => {
			state.isLoading = true
			state.error = ''
		},
		[buyPacket.fulfilled.type]: (state) => {
			state.isLoading = false
		},
		[buyPacket.rejected.type]: (state) => {
			state.isLoading = false
			localStorage.removeItem('isAuth')
			localStorage.removeItem('token')
			state.isLoading = false
			state.error = ''
			window.location.href = '/'
		}
	}
})

export const packetActions = packetSlice.actions
export default packetSlice.reducer
