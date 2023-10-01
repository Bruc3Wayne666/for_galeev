import React, { FC, PropsWithChildren } from 'react'
import { Navigate } from 'react-router'

const AuthRequired: FC<PropsWithChildren> = ({ children }) => {
	if (!localStorage.getItem('isAuth')) {
		return <Navigate to='/auth' />
	}

	return children
}

export default AuthRequired
