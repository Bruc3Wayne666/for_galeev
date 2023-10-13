import { ChangeEvent, FC, FormEvent, useState } from 'react'
import { useActions } from '../../../../store/hooks/useActions.ts'
import { useAppSelector } from '../../../../store/hooks/redux.ts'


const DollarIcon = () => <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5}
							  stroke='currentColor' className='w-12 h-12'>
	<path strokeLinecap='round' strokeLinejoin='round'
		  d='M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
</svg>


interface ModalProps {
	setShowModal: (v: boolean) => void;
}

const Modal: FC<ModalProps> = ({ setShowModal }) => {
	const [step, setStep] = useState('create')
	const [value, setValue] = useState(0)
	const { createTransaction, commitTransaction, getTransactions } = useActions()
	const { committing, isLoading } = useAppSelector(state => state.transactionSlice)
	const handleSubmit = (e: FormEvent<HTMLInputElement>) => {
		if (step === 'create') {
			e.preventDefault()
			createTransaction({ sum: value })
			return setStep('confirm')
		}
		commitTransaction({ topup_id: committing.payment_id })
		setShowModal(false)
	}

	const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
		const val = Number(e.target.value)
		if (val >= 0) setValue(val)
	}

	return (
		<div className='fixed flex top-0 left-0 right-0 bottom-0 filter backdrop-brightness-50 p-22'>

			<form
				onSubmit={handleSubmit}
				className='relative m-auto bg-gray-800 p-12 rounded-3xl text-white min-w-[480px] w-1/3 min-h-1/3'>

				{
					step === 'create'
						? <>
							<div className='text-2xl font-semibold mb-8'>
								Create Transaction
							</div>

							<div className='mb-12'>
								<label>
									Enter sum
									<div className='items-center flex mt-3 bg-gray-900 px-3 py-1 rounded-xl'>
										<DollarIcon />
										<input
											className='px-2 outline-none w-full bg-transparent'
											type='number'
											value={value || ''}
											placeholder='0'
											onChange={handleChangeValue}
										/>
										USD
									</div>
								</label>
							</div>

							<div className='flex justify-between'>
								<button onClick={() => setShowModal(false)}
										className='bg-red-600 px-6 py-3 rounded-3xl text-xl text-white font-semibold'
								>Cancel
								</button>
								<button
									disabled={(value > 100) || (value < 10)}
									type='submit'
									className='transition duration-200 disabled:bg-gray-400 bg-blue-600 px-6 py-3 rounded-3xl text-xl text-white font-semibold'
								>Create
								</button>
							</div>
						</> :
						isLoading ? <><p className='text-white'>LOLO</p></>
							:
							<>
								<div className='text-2xl font-semibold mb-8'>
									Deliver money to defined wallet
								</div>
								<div className='text-xl text-yellow-400'>{committing.payment_data}</div>
								<div className='flex justify-end'>
									<button type='submit'
											className='bg-green-600 px-6 py-3 rounded-3xl text-xl text-white font-semibold'
									>Done
									</button>
								</div>
							</>
				}


				<div
					onClick={() => setShowModal(false)}
					className='absolute top-4 right-4 cursor-pointer text-xl font-semibold'>&times;
				</div>
			</form>

		</div>
	)
}

export default Modal
