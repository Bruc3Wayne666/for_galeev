import Packet from './Packet'

const investments_list = [
	{
		'day_left': 21,
		'dividends': 20,
		'id': 1,
		'packet_id': 1,
		'status': 'active',
		'sum': 20,
		'user_id': 1
	},
	{
		'day_left': 21,
		'dividends': 20,
		'id': 1,
		'packet_id': 1,
		'status': 'active',
		'sum': 20,
		'user_id': 1
	},
	{
		'day_left': 21,
		'dividends': 20,
		'id': 1,
		'packet_id': 1,
		'status': 'active',
		'sum': 20,
		'user_id': 1
	},
	{
		'day_left': 21,
		'dividends': 20,
		'id': 1,
		'packet_id': 1,
		'status': 'active',
		'sum': 20,
		'user_id': 1
	},
	{
		'day_left': 21,
		'dividends': 20,
		'id': 1,
		'packet_id': 1,
		'status': 'active',
		'sum': 20,
		'user_id': 1
	},
	{
		'day_left': 21,
		'dividends': 20,
		'id': 1,
		'packet_id': 1,
		'status': 'active',
		'sum': 20,
		'user_id': 1
	},
	{
		'day_left': 21,
		'dividends': 20,
		'id': 1,
		'packet_id': 1,
		'status': 'active',
		'sum': 20,
		'user_id': 1
	},
	{
		'day_left': 21,
		'dividends': 20,
		'id': 1,
		'packet_id': 1,
		'status': 'active',
		'sum': 20,
		'user_id': 1
	},
	{
		'day_left': 21,
		'dividends': 20,
		'id': 1,
		'packet_id': 1,
		'status': 'active',
		'sum': 20,
		'user_id': 1
	},
	{
		'day_left': 21,
		'dividends': 20,
		'id': 1,
		'packet_id': 1,
		'status': 'active',
		'sum': 20,
		'user_id': 1
	}
]

const Wallet = () => {
	// const {} = useAppSelector(state => state.transactionSlice)
	// const { getTransactions } = useActions()
	//
	// useEffect(() => {
	// 	getTransactions()
	// }, [])

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
					investments_list
						.map(investment => <Packet {...investment} />)
				}
				</tbody>
			</table>
		</div>
	)
}

export default Wallet
