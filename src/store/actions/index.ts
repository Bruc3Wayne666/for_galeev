import * as AuthThunks from '../reducers/auth/authActions'
import { authActions } from '../reducers/auth/authSlice'
import * as PacketThunks from '../reducers/packet/packetActions'
import { packetActions } from '../reducers/packet/packetSlice'
import * as UserThunks from '../reducers/user/userActions'
import { userActions } from '../reducers/user/userSlice'
import * as TransactionThunks from '../reducers/transaction/transactionActions'
import { transactionActions } from '../reducers/transaction/transactionSlice'

export default {
	...authActions,
	...AuthThunks,
	...packetActions,
	...PacketThunks,
	...userActions,
	...UserThunks,
	...transactionActions,
	...TransactionThunks
}
