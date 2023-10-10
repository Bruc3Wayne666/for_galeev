import { instance } from './index.ts'

export interface CreateTransactionParams {
	sum: number
}

export interface CommitTransactionParams {
	topup_id: number
}

export interface GetTransactionParams {
	topup_id: number
}

export interface CreateTransactionResponse {
	payment_data: string
	payment_id: string
	success: boolean
}

export interface CommitTransactionResponse {
	message: string
	success: boolean
}

export interface Topup {
	id: number
	payment_data: string
	status: string
	summ: number
	time_commited: number
	time_created: number
	time_finished: number | null
	type: string
	user_id: number
}

export interface GetTransactionResponse {
	topup: Topup
	success: boolean
}

export class TransactionAPI {
	static async create(params: CreateTransactionParams) {
		const { data } = await instance.put<CreateTransactionResponse>('transaction/create/topup', params)
		return data
	}

	static async commit(params: CommitTransactionParams) {
		const { data } = await instance.post<CommitTransactionResponse>('transaction/commit/topup', params)
		return data
	}

	static async get(params: GetTransactionParams) {
		const { data } = await instance.get<GetTransactionResponse>('transaction/get/topup', params)
		return data
	}
}
