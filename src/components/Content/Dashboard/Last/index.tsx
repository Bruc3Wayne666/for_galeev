import React from 'react'

// <div className='mt-12 text-white w-96 rounded-3xl
// bg-gradient-to-tl from-orange-500 to-violet-400 p-1
// '>
// <div className='
// bg-gray-950
// px-7 py-5
// rounded-[20px]
// '>
const Last = () => {
	return (
		<>
			<div>
				<div className='
		bg-gradient-to-tl from-orange-500 to-violet-400 bg-clip-text text-transparent
			mb-6 xl:text-3xl 2xl:text-4xl font-semibold
			'>
					Last Token
				</div>

				<div className='text-2xl flex items-center mb-4'>
					Price: <span className='ml-auto font-bold text-green-600'>850</span>
				</div>

				<div className='text-lg flex items-center text-gray-400'>
					Transaction Time: <span className='ml-auto'>Sep 09, 2020</span>
				</div>
			</div>
		</>
	)
}

export default Last
