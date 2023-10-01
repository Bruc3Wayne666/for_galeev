import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import Dashboard from './Dashboard'

const routes = [
	{ path: '*', element: <Navigate to='dashboard' /> },
	{ path: 'dashboard', element: <Dashboard /> },
	{ path: 'wallet', element: <h1>WALLET</h1> },
	{ path: 'purchase', element: <h1>PURCHASE</h1> },
	{ path: 'settings', element: <h1>SETTINGS</h1> }
]
const Index = () => {
	return (
		<main className='p-8 bg-gray-950 absolute h-full left-60 w-[calc(100%-240px)]'>
			<Routes>
				{
					routes
						.map(({ path, element }) => (
							<Route path={path} element={element} />
						))
				}
			</Routes>
		</main>
	)
}

export default Index
