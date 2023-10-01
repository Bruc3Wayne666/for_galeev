import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { Provider } from 'react-redux'
import { setupStore } from './store/store.ts'

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
	document.documentElement.classList.add('dark')
}

const store = setupStore()

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<App />
	</Provider>
)
