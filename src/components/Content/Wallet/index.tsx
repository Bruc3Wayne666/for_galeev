import Packet from './Packet'
import { useAppSelector } from '../../../store/hooks/redux.ts'
import { useEffect } from 'react'
import { useActions } from '../../../store/hooks/useActions.ts'


const Wallet = () => {
	const { investments_list } = useAppSelector(state => state.userSlice)
	const { getUserPackets } = useActions()

	useEffect(() => {
		getUserPackets()
	}, [])

	return (
		<div className='
		h-full
		overflow-y-auto
		'>
			<table className='relative text-white bg-gray-800 w-full h-full rounded-3xl pt-8'>
				<thead className='w-full h-12'>
				<tr className='flex'>
					<th className='flex-1 pt-8'>Days left</th>
					<th className='flex-1 pt-8'>Dividends</th>
					<th className='flex-1 pt-8'>ID</th>
					<th className='flex-1 pt-8'>Packet ID</th>
					<th className='flex-1 pt-8'>Status</th>
					<th className='flex-1 pt-8'>Sum</th>
				</tr>
				</thead>
				<tbody className='w-full'>
				{
					investments_list.length > 0
						? investments_list
							.map(investment => <Packet {...investment} />)
						:
						<div className='h-full flex items-center justify-center text-xl text-neutral-500'>There are no
							investments
							yet
						</div>
				}
				</tbody>
			</table>
		</div>
	)
}

export default Wallet
