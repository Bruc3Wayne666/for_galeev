import React, { FC } from 'react'

interface PacketProps {
	day_left: number
	dividends: number
	id: number
	packet_id: number
	status: string
	sum: number
	user_id: number
}

const Packet: FC<PacketProps> = props => {
	const {
		day_left,
		dividends,
		id,
		packet_id,
		status,
		sum
		// user_id
	} = props

	return (
		<tr className='h-24 flex'>
			<td className='flex-1 flex items-center justify-center'>{day_left}</td>
			<td className='flex-1 flex items-center justify-center text-xl text-green-600 font-semibold'>{dividends}</td>
			<td className='flex-1 flex items-center justify-center'>{id}</td>
			<td className='flex-1 flex items-center justify-center'>{packet_id}</td>
			<td className='flex-1 flex items-center justify-center text-neutral-300 text-xs font-semibold'>{status.toUpperCase()}</td>
			<td className='flex-1 flex items-center justify-center text-xl text-green-600 font-semibold'>{sum}</td>
		</tr>
	)
}

export default Packet
