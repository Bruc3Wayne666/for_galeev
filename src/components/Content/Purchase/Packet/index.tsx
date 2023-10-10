import { FC } from 'react'

interface PacketProps {
	id: number
	is_every_day_withdrawal: boolean
	max_sum: number
	min_sum: number
	name: string
	time: number
}

const DollarIcon = () => <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5}
							  stroke='currentColor' className='w-12 h-12'>
	<path strokeLinecap='round' strokeLinejoin='round'
		  d='M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
</svg>


const TickIcon = () => <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5}
							stroke='gold' className='w-6 h-6'>
	<path strokeLinecap='round' strokeLinejoin='round'
		  d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
</svg>


const CrossIcon = () => <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5}
							 stroke='red' className='w-6 h-6'>
	<path strokeLinecap='round' strokeLinejoin='round'
		  d='M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636' />
</svg>


const Packet: FC<PacketProps> = props => {
	const {
		id,
		is_every_day_withdrawal,
		time,
		max_sum,
		min_sum,
		name
	} = props
	return (
		<div className='flex flex-col h-[80%] grow rounded-3xl p-6 text-white text-xl border-2 border-neutral-500'>
			<div className='mb-10'>
				<div className='text-4xl font-bold mb-3'>
					{name}
				</div>
				<div className=''>
					{time} days
				</div>
			</div>
			<div className='mb-10'>
				<ul>
					<li className='mb-3'>
						<div className='flex justify-between items-center'>
							Min. sum:
							<span className='text-xl font-semibold text-green-600'>{min_sum}</span>
						</div>
					</li>
					<li className='mb-3'>
						<div className='flex justify-between items-center'>
							Max. sum:
							<span className='text-xl font-semibold text-green-600'>{max_sum}</span>
						</div>
					</li>
					<li>
						<div className='flex justify-between items-center'>
							Withdrawal every day:
							<span
								className='text-xl font-semibold text-green-600'>
								{is_every_day_withdrawal ?
									<TickIcon /> : <CrossIcon />}</span>
						</div>
					</li>
				</ul>
			</div>
			<div className='mt-auto flex grow flex-col justify-between'>
				<div className=''>
					<label>
						Deposit sum
						<div className='items-center flex mt-3 bg-gray-800 px-3 py-1 rounded-xl'>
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
				<div className=''>
					<button className='w-full bg-blue-900 rounded-3xl py-2'>Invest</button>
				</div>
			</div>
		</div>
	)
}

export default Packet
