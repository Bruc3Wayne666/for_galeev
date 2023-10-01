import { Navigate, Route, Routes } from 'react-router'
import Auth from './pages/Auth'
import Workspace from './pages/Workspace'
import React, { useEffect } from 'react'
import AuthRequired from './hoc/AuthRequired.tsx'
import { useActions } from './store/hooks/useActions.ts'

const publicRoutes = [
	{ path: 'auth/*', element: <Auth /> },
	{ path: 'auth', element: <Navigate to='register' /> },
	{ path: '*', element: <Navigate to='auth/register' /> }
]
const privateRoutes = [
	{ path: 'workspace/*', element: Workspace }
]
const App = () => {
	const { setToken } = useActions()
	useEffect(() => {
		setToken()
	}, [])

	return (
		<Routes>
			{
				publicRoutes
					.map(({ path, element }, index) => <Route key={`${index}_`} path={path} element={element} />)
			}
			{
				privateRoutes
					.map(({ path, element }, index) => <Route key={`_${index}`} path={path} element={
						<AuthRequired>
							{element()}
						</AuthRequired>
					} />)
			}
		</Routes>
	)
}

export default App
