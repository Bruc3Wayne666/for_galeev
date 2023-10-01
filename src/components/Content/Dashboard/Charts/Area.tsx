import React from 'react'
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const data = [
	{
		name: 'Sun',
		books: 4000,
		clothes: 2400,
		electronic: 2400
	},
	{
		name: 'Mon',
		books: 3000,
		clothes: 1398,
		electronic: 2210
	},
	{
		name: 'Tue',
		books: 2000,
		clothes: 9800,
		electronic: 2290
	},
	{
		name: 'Wed',
		books: 2780,
		clothes: 3908,
		electronic: 2000
	},
	{
		name: 'Thu',
		books: 1890,
		clothes: 4800,
		electronic: 2181
	},
	{
		name: 'Fri',
		books: 2390,
		clothes: 3800,
		electronic: 2500
	},
	{
		name: 'Sat',
		books: 3490,
		clothes: 4300,
		electronic: 2100
	}
]
const ChartArea = () => {
	return (
		<>
			<h1
				className='
					2xl:text-3xl text-white font-semibold
					mb-8
				'
			>Analytics</h1>
			<div className='h-[300px]'>
				<ResponsiveContainer width='99%' height='90%'>
					<AreaChart
						data={data}
						margin={{
							top: 10,
							right: 30,
							left: 0,
							bottom: 0
						}}
					>
						<XAxis dataKey='name' />
						<YAxis />
						<Tooltip

						/>
						<Area
							type='monotone'
							dataKey='electronic'
							stackId='1'
							stroke='#8833d8'
							fill='#8884d8'
						/>
						<Area
							type='monotone'
							dataKey='clothes'
							stackId='1'
							stroke='#86c49d'
							fill='#82229d'
						/>
						<Area
							type='monotone'
							dataKey='books'
							stackId='1'
							stroke='#ffc658'
							fill='#f32458'
						/>
					</AreaChart>
				</ResponsiveContainer>
			</div>
		</>
	)
}

export default ChartArea
