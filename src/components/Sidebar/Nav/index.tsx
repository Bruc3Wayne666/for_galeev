import React from 'react'
import { HomeIcon, PurchaseIcon, SettingsIcon, WalletIcon } from './Icons'
import { NavLink, useLocation } from 'react-router-dom'


const options = [
	{
		title: 'Home',
		path: 'dashboard',
		icon: HomeIcon
	},
	{
		title: 'My Wallet',
		path: 'wallet',
		icon: WalletIcon
	},
	{
		title: 'Purchase',
		path: 'purchase',
		icon: PurchaseIcon
	},
	{
		title: 'Settings',
		path: 'settings',
		icon: SettingsIcon
	}
]
const Nav = () => {
	// const { option: current } = useParams()
	const { pathname } = useLocation()
	const current = pathname.split('/')[1]

	return (
		<nav className='mt-14 w-full'>
			<ul className='flex flex-col gap-4'>
				{
					Object.keys(options)
						.map(option => (
							<li className='cursor-pointer'>
								<NavLink
									to={options[option].path}
									className={`
										flex items-center text-white sm:justify-center xl:justify-start
										${options[option].path === current ? 'bg-gray-700' : ''}
										 hover:bg-gray-800
										  px-2 py-2 rounded-xl duration-200 
										  `}>
									{options[option].icon()}
									<span
										className='sm:hidden xl:inline-block ml-2'>{options[option].title}</span>
								</NavLink>
							</li>
						))
				}
			</ul>
		</nav>
	)
}

export default Nav
