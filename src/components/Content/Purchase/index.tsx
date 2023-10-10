import { useEffect } from 'react'
import Packet from './Packet'

const packets = [
	{
		'id': 1,
		'is_every_day_withdrawal': true,
		'max_sum': 1000,
		'min_sum': 20,
		'name': 'Base',
		'time': 21
	},
	{
		'id': 2,
		'is_every_day_withdrawal': false,
		'max_sum': 3000,
		'min_sum': 100,
		'name': 'Medium',
		'time': 45
	},
	{
		'id': 3,
		'is_every_day_withdrawal': false,
		'max_sum': 10000,
		'min_sum': 300,
		'name': 'Xtra',
		'time': 60
	}
]
const Purchase = () => {
	// const { packets } = useAppSelector(state => state.packetSlice)
	// const { getPackets } = useActions()

	useEffect(() => {
		// getPackets()
	}, [])

	return (
		<div className='
		flex
		sm:flex-col lg:flex-row
		sm:gap-2 lg:gap-3
		items-center
		h-full
		'>
			{

				packets.map(packet => <Packet {...packet} />)
			}
		</div>
	)
}

export default Purchase
