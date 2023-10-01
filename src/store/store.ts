import { combineReducers } from 'redux'
import authSlice from './reducers/auth/authSlice.ts'
import { configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
	authSlice
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	})
}

export type RootStateType = ReturnType<typeof rootReducer>
export type AppStoreType = ReturnType<typeof setupStore>
export type AppDispatchType = AppStoreType['dispatch']
