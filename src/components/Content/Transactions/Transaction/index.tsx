import { FC } from 'react'

interface PacketProps {
	id: number
	is_every_day_withdrawal: boolean
	max_sum: number
	min_sum: number
	name: string
	time: number
}

const Packet: FC<PacketProps> = props => {
	const {
		// id,
		// is_every_day_withdrawal,
		// time,
		// max_sum,
		// min_sum,
		name
	} = props
	return (
		<div className='text-white text-xl border-2 border-neutral-500 h-96'>
			{name}
		</div>
	)
}

export default Packet
