import { useEffect } from 'react'
import Packet from './Packet'
import { useActions } from '../../../store/hooks/useActions.ts'
import { useAppSelector } from '../../../store/hooks/redux.ts'

const Purchase = () => {
	const { packets } = useAppSelector(state => state.packetSlice)
	const { getPackets } = useActions()

	useEffect(() => {
		getPackets()
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
