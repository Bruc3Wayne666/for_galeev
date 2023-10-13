import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
	CreateTransactionResponse,
	GetTransactionResponse,
	GetTransactionsResponse,
	Topup
} from '../../../api/transaction.ts'
import { commitTransaction, createTransaction, getTransaction, getTransactions } from './transactionActions.ts'

interface TransactionState {
	currentTransaction: Topup
	transactions: Topup[]
	committing: CreateTransactionResponse
	isLoading: boolean
	error: ''
}

const initialState: TransactionState = {
	currentTransaction: {} as Topup,
	transactions: [],
	committing: {} as CreateTransactionResponse,
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
		[createTransaction.fulfilled.type]: (state, { payload }: PayloadAction<CreateTransactionResponse>) => {
			state.isLoading = false
			state.committing = payload
		},
		[createTransaction.rejected.type]: (state) => {
			state.isLoading = false
			localStorage.removeItem('isAuth')
			localStorage.removeItem('token')
			state.isLoading = false
			state.error = ''
			window.location.href = '/'
		},
		[commitTransaction.pending.type]: (state) => {
			state.isLoading = true
			state.error = ''
		},
		[commitTransaction.fulfilled.type]: (state) => {
			state.isLoading = false
		},
		[commitTransaction.rejected.type]: (state) => {
			state.isLoading = false
			localStorage.removeItem('isAuth')
			localStorage.removeItem('token')
			state.isLoading = false
			state.error = ''
			window.location.href = '/'
		},
		[getTransactions.fulfilled.type]: (state, { payload }: PayloadAction<GetTransactionsResponse>) => {
			state.isLoading = false
			state.transactions = payload.topup
		},
		[getTransactions.pending.type]: (state) => {
			state.isLoading = true
			state.error = ''
		},
		[getTransactions.rejected.type]: (state) => {
			state.isLoading = false
			localStorage.removeItem('isAuth')
			localStorage.removeItem('token')
			state.isLoading = false
			state.error = ''
			window.location.href = '/'
		},
		[getTransaction.pending.type]: (state) => {
			state.isLoading = true
			state.error = ''
		},
		[getTransaction.fulfilled.type]: (state, { payload }: PayloadAction<GetTransactionResponse>) => {
			state.isLoading = false
			state.currentTransaction = payload.topup
		},
		[getTransaction.rejected.type]: (state) => {
			state.isLoading = false
			localStorage.removeItem('isAuth')
			localStorage.removeItem('token')
			state.isLoading = false
			state.error = ''
			window.location.href = '/'
		}
	}
})

export const transactionActions = transactionSlice.actions
export default transactionSlice.reducer
