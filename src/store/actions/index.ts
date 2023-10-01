import * as AuthThunks from '../reducers/auth/authActions'
import { authActions } from '../reducers/auth/authSlice'

export default {
	...authActions,
	...AuthThunks
}
