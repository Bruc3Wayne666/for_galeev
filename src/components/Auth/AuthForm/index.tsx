import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import { Link, useParams } from 'react-router-dom'
import { useActions } from '../../../store/hooks/useActions.ts'

interface AuthForm {
	username: string
	email: string
	password: string
}

const Form = () => {
	const type = useParams().type || 'register'
	const { register, login } = useActions()
	const {
		register: regField,
		handleSubmit,
		// reset,
		formState: { errors, isValid }
	} = useForm<AuthForm>({
		mode: 'onBlur',
		defaultValues: {
			username: '',
			email: '',
			password: ''
		}
	})

	// useEffect(() => reset(), [type])
	const submit: SubmitHandler<AuthForm> = data => {
		if (type === 'login') return login(data)
		register(data)
	}

	const error: SubmitErrorHandler<AuthForm> = data => {
		console.log(data)
	}

	return (
		<form
			onSubmit={handleSubmit(submit, error)}
			className='bg-gray-900 dark:bg-gray-900 py-12 px-8 rounded-2xl relative mx-auto top-1/2 -translate-y-1/2 w-[600px] bg-yellow-50'>
			{
				type === 'register' &&
				<>
					<input
						type='text'
						placeholder='Username'
						className='w-full rounded-lg h-14 mb-3 outline-none pl-2.5 text-2xl placeholder:text-xl bg-gray-800 text-amber-300 tracking-widest'
						{...regField('username', { required: 'Username is required!' })}
					/>
					{errors.username && <p className='mb-3 text-red-400'>{errors.username.message}</p>}
				</>
			}
			<input
				type='email'
				placeholder='Email'
				className='w-full rounded-lg h-14 mb-3 outline-none pl-2.5 text-2xl placeholder:text-xl bg-gray-800 text-amber-300 tracking-widest'
				{...regField('email', {
					required: 'Email is required!',
					pattern: {
						value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
						message: 'Please enter a valid email.'
					}
				})}
			/>
			{errors.email && <p className='mb-3 text-red-400'>{errors.email.message}</p>}
			<input
				type='password'
				placeholder='Password'
				className='w-full rounded-lg h-14 mb-3 outline-none pl-2.5 text-2xl placeholder:text-xl bg-gray-800 text-amber-300 tracking-widest'
				{...regField('password', {
					required: 'Password is required!',
					pattern: {
						value: /^(?=.*[a-z].*[a-z].*[a-z].*[a-z].*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,
						message: 'Please enter a valid password.'
					}
				})}
			/>
			{errors.password && <p className='mb-3 text-red-400'>{errors.password.message}</p>}

			<div className='text-amber-50'>
				{
					type === 'login'
						? <>
							Don't have an account?&nbsp;
							<span
								// onClick={() => setType('login')}
								className='mt-5 cursor-pointer text-green-300'
							>
								<Link to='/auth/register' replace>
									Sign Up now!
								</Link>
							</span>
						</>
						: <>
							Already have an account?&nbsp;
							<span
								// onClick={() => setType('register')}
								className='mt-5 cursor-pointer text-green-400'
							>
								<Link to='/auth/login' replace>
								Sign In!
								</Link>
							</span>
						</>
				}
			</div>
			<button
				type='submit'
				disabled={!isValid}
				className='inline-block bg-amber-400 text-white py-3 px-12 mt-14 rounded-3xl cursor-pointer hover:saturate-50 focus:saturate-50 disabled:cursor-default disabled:bg-gray-400 transition:all duration-300 outline-none'
			>
				{type.toUpperCase()}
			</button>
		</form>
	)
}

export default Form
