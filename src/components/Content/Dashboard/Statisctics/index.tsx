import { DividendsIcon, TotalIcon } from './icons.tsx'
import { useAppSelector } from '../../../../store/hooks/redux.ts'


const icons = {
	dividends: <DividendsIcon />,
	balance: <TotalIcon />
}

const Statistics = () => {
	const { user } = useAppSelector(state => state.userSlice)
	return (
		<>
			<div className='xl:text-3xl 2xl:text-4xl mb-6 font-semibold'>
				Statistics
			</div>
			<ul className='flex flex-col gap-3'>
				{
					Object.keys(user)
						.map(key => (
								<li>
									<div className='flex items-center'>
										{icons[key as keyof typeof icons] || '_'}
										<div
											className='flex items-center flex-grow ml-2 text-gray-400'
										>
											{key}
											<span
												className='ml-auto text-2xl font-bold text-green-600'>{user[key as keyof typeof user]}</span>
										</div>
									</div>
								</li>
							)
						)
				}
			</ul>
		</>
	)
}

export default Statistics
