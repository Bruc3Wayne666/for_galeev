import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import authSlice from './reducers/auth/authSlice.ts'
import packetSlice from './reducers/packet/packetSlice.ts'
import userSlice from './reducers/user/userSlice.ts'
import transactionSlice from './reducers/transaction/transactionSlice.ts'

const rootReducer = combineReducers({
	authSlice,
	packetSlice,
	userSlice,
	transactionSlice
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	})
}

export type RootStateType = ReturnType<typeof rootReducer>
export type AppStoreType = ReturnType<typeof setupStore>
export type AppDispatchType = AppStoreType['dispatch']
