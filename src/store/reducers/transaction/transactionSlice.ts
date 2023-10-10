import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GetTransactionResponse, Topup } from '../../../api/transaction.ts'
import { commitTransaction, createTransaction, getTransactions } from './transactionActions.ts'

interface TransactionState {
	transaction: Topup
	isLoading: boolean
	error: ''
}

const initialState: TransactionState = {
	transaction: {} as Topup,
	isLoading: false,
	error: ''
}

const transactionSlice = createSlice({
	name: 'transaction',
	initialState,
	reducers: {},
	extraReducers: {
		[createTransaction.pending.type]: (state) => {
			state.isLoading = true
			state.error = ''
		},
		[createTransaction.fulfilled.type]: (state) => {
			state.isLoading = false
		},
		[commitTransaction.pending.type]: (state) => {
			state.isLoading = true
			state.error = ''
		},
		[commitTransaction.fulfilled.type]: (state) => {
			state.isLoading = false
		},
		[getTransactions.pending.type]: (state) => {
			state.isLoading = true
			state.error = ''
		},
		[getTransactions.fulfilled.type]: (state, { payload }: PayloadAction<GetTransactionResponse>) => {
			state.isLoading = false
			state.transaction = payload.topup
		}
	}
})

export const transactionActions = transactionSlice.actions
export default transactionSlice.reducer
