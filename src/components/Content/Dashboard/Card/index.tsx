import { FC, PropsWithChildren } from 'react'

interface CardProps extends PropsWithChildren {
	className?: string
}

const Index: FC<CardProps> = ({ children, className }) => {
	return (
		<div className={`${className} px-8 py-6 text-white border-2 rounded-3xl border-neutral-500`}>
			{children}
		</div>
	)
}

export default Index
