import { FC } from 'react'
import { Topup } from '../../../../api/transaction.ts'

interface TransactionProps extends Topup {
}

const PendingIcon = () => {
	return <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5}
				stroke='currentColor' className='w-6 h-6'>
		<path strokeLinecap='round' strokeLinejoin='round' d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z' />
	</svg>
}

const TickIcon = () => <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5}
							stroke='gold' className='w-6 h-6'>
	<path strokeLinecap='round' strokeLinejoin='round'
		  d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
</svg>

const CreateIcon = () => <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5}
							  stroke='currentColor' className='w-6 h-6'>
	<path strokeLinecap='round' strokeLinejoin='round' d='M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z' />
</svg>


const icons = {
	created: <CreateIcon />,
	pending: <PendingIcon />,
	finished: <TickIcon />
}


const Transaction: FC<TransactionProps> = props => {
	const {
		id,
		payment_data,
		status,
		summ,
		time_commited,
		time_finished,
		time_created,
		type
	} = props
	return (
		<div className='p-6 flex items-center justify-between bg-gray-800 rounded-3xl text-white text-xl h-32 mb-4'>
			<div className=''>
				<div className='text-sm'>
					Address:
					<span className='block text-neutral-300 text-xl'>
						{payment_data}
					</span>
				</div>
				ID: {id}
			</div>

			<div className='flex gap-3'>
				<div className=''>
					{/*Type:*/}
					<span className='block text-blue-200 font-semibold'>
					{type.toUpperCase()}
				</span>
				</div>

				<div className=''>
					Inv. sum.:&nbsp;
					<span className='text-yellow-400 font-semibold'>
					${summ}
				</span>
				</div>
			</div>

			<div className='flex flex-col text-neutral-400 text-sm'>
				{
					time_created &&
					<div className='block'>Created: {new Date(time_created).toLocaleDateString()}</div>
				}
				{
					time_commited &&
					<div className='block'>Committed: {new Date(time_commited).toLocaleDateString()}</div>
				}
				{
					time_finished &&
					<div className='block'>Finished: {new Date(time_finished).toLocaleDateString()}</div>
				}
			</div>

			<div className='text-xs text-white flex justify-center items-center'>
				{icons[status as keyof typeof icons]}
				&nbsp;
				{status.toUpperCase()}
			</div>
		</div>
	)
}

export default Transaction
