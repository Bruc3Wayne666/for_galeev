import { DividendsIcon, TotalIcon } from './icons.tsx'


const stats = [
	{ title: 'Dividends', icon: DividendsIcon },
	{ title: 'Total Coins', icon: TotalIcon }
]
{/*linear-gradient(to left top, rgb(251, 113, 133), rgb(124, 45, 18), rgb(0, 0, 0))*/
}

const Statistics = () => {
	return (
		<>
			<div className='xl:text-3xl 2xl:text-4xl mb-6  font-semibold'>
				Statistics
			</div>
			<ul className='flex flex-col gap-3'>
				{
					stats
						.map(({ title, icon }) => (
							<li>
								<div className='flex items-center'>
									{icon()}
									<div
										className='flex items-center flex-grow ml-2 text-gray-400'
									>
										{title}
										<span className='ml-auto text-2xl font-bold text-green-600'>0</span>
									</div>
								</div>
							</li>
						))
				}
			</ul>
		</>
	)
}

export default Statistics
