import instance from './index.ts'

export interface Packet {
	id: number
	is_every_day_withdrawal: boolean
	max_sum: number
	min_sum: number
	name: string
	time: number
}

export interface PacketPayload {
	packets: Packet[]
}


export interface BuyParams {
	id: number
	sum: number
}

export interface BuySuccess {
	message: string
	success: boolean
}

export class PacketAPI {
	static async get() {
		const { data } = await instance.get<PacketPayload>('packet/all')
		return data
	}

	static async buy(params: BuyParams) {
		const { data } = await instance.post<BuySuccess>('packet/buy', params)
		return data
	}
}
