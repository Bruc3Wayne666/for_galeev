import React, { FC, useState } from 'react'


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

	return (
		<div className='fixed flex top-0 left-0 right-0 bottom-0 filter backdrop-brightness-50 p-22'>

			<div className='relative m-auto bg-gray-800 p-12 rounded-3xl text-white w-1/3 min-h-1/3'>

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
											value={0}
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
								<button onClick={() => setStep('confirm')}
										className='bg-blue-600 px-6 py-3 rounded-3xl text-xl text-white font-semibold'
								>Create
								</button>
							</div>
						</> : <>
							<div className='text-2xl font-semibold mb-8'>
								Deliver money to defined wallet
							</div>
							<div className='text-xl text-yellow-400'>[address]</div>
							<div className='flex justify-end'>
								<button onClick={() => setShowModal(false)}
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
			</div>

		</div>
	)
}

export default Modal
