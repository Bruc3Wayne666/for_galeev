import { createAsyncThunk } from '@reduxjs/toolkit'
import {
	CommitTransactionParams,
	CreateTransactionParams,
	GetTransactionParams,
	TransactionAPI
} from '../../../api/transaction.ts'

export const createTransaction = createAsyncThunk(
	'transaction/createTransaction',
	async (params: CreateTransactionParams, { rejectWithValue }) => {
		try {
			return await TransactionAPI.create(params)
		} catch (e) {
			return rejectWithValue(e)
		}
	}
)

export const commitTransaction = createAsyncThunk(
	'transaction/commitTransaction',
	async (params: CommitTransactionParams, { rejectWithValue }) => {
		try {
			return await TransactionAPI.commit(params)
		} catch (e) {
			return rejectWithValue(e)
		}
	}
)

export const getTransactions = createAsyncThunk(
	'user/getTransactions',
	async (_, { rejectWithValue }) => {
		try {
			return await TransactionAPI.get()
		} catch (e) {
			return rejectWithValue(e)
		}
	}
)

export const getTransaction = createAsyncThunk(
	'user/getTransaction',
	async (params: GetTransactionParams, { rejectWithValue }) => {
		try {
			return await TransactionAPI.getOne(params)
		} catch (e) {
			return rejectWithValue(e)
		}
	}
)

