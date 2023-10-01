import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import { Navigate } from 'react-router'
import Dashboard from './components/Content/Dashboard'
import Auth from './pages/Auth'


const WorkspaceLayout = () => {
	if (!localStorage.getItem('isAuth')) {
		return <Navigate to='auth' />
	}

	return (
		<div className='relative w-full overflow-hidden min-h-screen'>
			<Sidebar />
			<main
				className='p-8 bg-gray-950 absolute h-full sm:left-24 sm:w-[calc(100%-96px)] xl:left-60 xl:w-[calc(100%-240px)]'>
				<Outlet />
			</main>
		</div>
	)
}

const privateRoutes = [
	{
		index: true,
		element: <Navigate to='dashboard' />
	},
	{
		path: 'dashboard',
		element: <Dashboard />
	},
	{
		path: 'wallet',
		element: <h1 className='text-white'>wallet</h1>
	},
	{
		path: 'purchase',
		element: <h1 className='text-white'>purchase</h1>
	},
	{
		path: 'settings',
		element: <h1 className='text-white'>settings</h1>
	}
]

const publicRoutes = [
	{
		index: true,
		element: <Auth />
	},
	{
		path: ':type',
		element: <Auth />
	}
]


const router = createBrowserRouter([
	{
		path: '/',
		element: <WorkspaceLayout />,
		children: privateRoutes
	},
	{
		path: '/auth',
		children: publicRoutes
	}

])
const App = () => {
	// const { setToken } = useActions()
	// useEffect(() => {
	// 	setToken()
	// }, [])

	return <RouterProvider router={router} />
}

export default App
