import { useEffect, useState } from 'react'
import Modal from './Modal'
import { useAppSelector } from '../../../store/hooks/redux.ts'
import { useActions } from '../../../store/hooks/useActions.ts'
import Transaction from './Transaction'

const Transactions = () => {
	const { transactions } = useAppSelector(state => state.transactionSlice)
	const { getTransactions } = useActions()

	useEffect(() => {
		getTransactions()
		const interval = setInterval(getTransactions, 10000)

		return () => clearInterval(interval)
	}, [])

	const [showModal, setShowModal] = useState(false)

	return (
		<div className='
			relative
		h-full
		flex
		flex-col
		'>
			<div className='mb-12'>
				<button
					onClick={() => setShowModal(true)}
					className='inline-block px-8 py-4 rounded-3xl bg-blue-600 text-white font-semibold'
				>Create New
				</button>
			</div>

			<div className='overflow-y-auto max-h-full'>
				{transactions.map((transaction, index) => <Transaction key={index} {...transaction} />)}
			</div>
			{showModal && <Modal setShowModal={setShowModal} />}

		</div>
	)
}

export default Transactions
