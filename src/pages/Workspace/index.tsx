import React from 'react'
import Sidebar from '../../components/Sidebar'
import Content from '../../components/Content'

const Workspace = () => {
	return (
		<div className='relative w-full overflow-hidden min-h-screen'>
			<Sidebar />
			<Content />
		</div>
	)
}

export default Workspace
