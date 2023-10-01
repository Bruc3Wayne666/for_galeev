import React from 'react'
import Statistics from './Statisctics'
import Last from './Last'
import Card from './Card'
import Area from './Charts/Area.tsx'
import Pie from './Charts/Pie.tsx'

const Index = () => {
	return (
		<div className='
		h-full
		sm:overflow-y-scroll
		xl:overflow-hidden
		grid gap-6
		grid-flow-dense
		2xl:grid-cols-4
		xl:grid-cols-3
		md:grid-cols-2
		'>
			<Card
				className='
					2xl:row-span-3
					{/*md:row-span-2*/}
				'
			>
				<Statistics />
			</Card>
			<Card><Statistics /></Card>
			<Card><Last /></Card>
			<Card
				className='
			2xl:row-span-2
			2xl:col-span-1
			xl:col-span-2
			xl:row-span-1
			{/*md:col-span-2*/}
			md:row-span-2
			'>
				<Pie />
			</Card>
			<Card><Last /></Card>

			<Card><Statistics /></Card>
			<Card
				className='
				2xl:col-span-2
				'
			>
				<Area />
			</Card>
			<Card><Statistics /></Card>


		</div>
	)
}

export default Index
