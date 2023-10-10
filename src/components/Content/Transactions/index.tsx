import { useState } from 'react'
import Modal from './Modal'

const Transactions = () => {
	// const {} = useAppSelector(state => state.transactionSlice)
	// const { getTransactions } = useActions()
	//
	// useEffect(() => {
	// 	getTransactions()
	// }, [])
	const [showModal, setShowModal] = useState(false)

	return (
		<div className='
			relative
		h-full
		'>
			<div className=''>
				<button
					onClick={() => setShowModal(true)}
					className='inline-block px-8 py-4 rounded-3xl bg-blue-600 text-white font-semibold'
				>Create New
				</button>
			</div>
			<div className=''>

			</div>

			{showModal && <Modal setShowModal={setShowModal} />}

		</div>
	)
}

export default Transactions
