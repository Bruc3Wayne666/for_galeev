import instance from './index.ts'

export interface User {
	id: number
	username: string
	balance: number
	dividends_sum: number
	telegram_id: null | string | number
	total_coins: number
	email: string
	status: string
}

export interface GetSelfPayload {
	user: User
	success: boolean
}

export interface Investment {
	day_left: number,
	dividends: number,
	id: number,
	packet_id: number,
	status: string,
	sum: number,
	user_id: number
}

export interface UserPacketsPayload {
	investments_list: Investment[]
	success: boolean
}

export interface UpdateUserParams {
	username: string
	old_password: string
	new_password: string
}


export class UserAPI {
	static async self() {
		const { data } = await instance.get<GetSelfPayload>('user/self')
		return data
	}

	static async update(params: UpdateUserParams) {
		const { data } = await instance.put('user/update', params)
		return data
	}

	static async getPackets() {
		const { data } = await instance.get<UserPacketsPayload>('user/packets')
		return data
	}
}
