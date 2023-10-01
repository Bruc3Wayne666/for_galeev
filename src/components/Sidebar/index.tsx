import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import { Switch } from '@headlessui/react'
import { useActions } from '../../store/hooks/useActions.ts'
import LogoutIcon from './Logout'

const Sidebar = () => {
	const { logout } = useActions()
	const [enabled, setEnabled] = useState(false)

	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setEnabled(true)
		}
	}, [])
	const handleChange = () => {
		if (!document.documentElement.classList.contains('dark')) {
			document.documentElement.classList.add('dark')
			setEnabled(true)
		} else {
			document.documentElement.classList.remove('dark')
			setEnabled(false)
		}
	}

	return (
		<aside
			className='py-12 px-4 flex flex-col items-center dark:bg-gray-900 sm:w-24 xl:w-60 fixed top-0 left-0 h-full rounded-r-[32px]'>
			<div className='sm:hidden xl:flex flex-col items-center text-xl font-semibold'>
				<img
					className='rounded-full w-16 h-16 object-cover mb-1'
					src='https://upload.wikimedia.org/wikipedia/en/1/19/Bruce_Wayne_%28The_Dark_Knight_Trilogy%29.jpg'
					alt='PHOTO'
				/>
				<div className='text-lg text-amber-50'>
					Bruce Wayne
				</div>
			</div>

			<Nav />

			<div className='mt-auto space-y-12 text-center'>
				<Switch
					checked={enabled}
					onChange={handleChange}
					className={`${
						enabled ? 'bg-orange-400' : 'bg-blue-950'
					} mt-auto relative inline-flex items-center h-8 w-20 rounded-full transition duration-300`}
				>
					<span className='sr-only'>Switch Theme</span>
					<span
						className={`${
							enabled ? 'translate-x-2' : 'translate-x-12'
						} inline-block h-5 w-5 bg-white rounded-full transition duration-300`}
					/>
				</Switch>

				<button
					className='mx-auto block bg-transparent text-red-600'
					onClick={() => logout()}
				>
					<LogoutIcon />
				</button>
			</div>
		</aside>
	)
}

export default Sidebar
