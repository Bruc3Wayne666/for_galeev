import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'


const data = [
	{ name: 'Mobile', value: 400, color: '#0088FE' },
	{ name: 'Desktop', value: 300, color: '#00C49F' },
	{ name: 'Laptop', value: 300, color: '#FFBB28' },
	{ name: 'Tablet', value: 200, color: '#FF8042' }
]

const ChartPie = () => {
	return (
		<>
			<h1
				className='
					2xl:text-3xl text-white font-semibold
					mb-8
				'
			>Analytics</h1>
			<div className='w-full mb-12'>
				<ResponsiveContainer width='99%' height={220}>
					<PieChart>
						<Tooltip
							contentStyle={{ background: 'white', borderRadius: '5px' }}
						/>
						<Pie
							data={data}
							innerRadius={'76%'}
							outerRadius={'90%'}
							paddingAngle={8}
							dataKey='value'
						>
							{data.map((item) => (
								<Cell key={item.name} fill={item.color} />
							))}
						</Pie>
					</PieChart>
				</ResponsiveContainer>
			</div>
			<div className='flex gap-6 items-center'>
				{data.map((item) => (
					<div className='text-xs' key={item.name}>
						<span>{item.name} </span>
						<span>{item.value}</span>
					</div>
				))}
			</div>
		</>
	)
}

export default ChartPie
