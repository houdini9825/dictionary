import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { ThemeContextProvider } from './contexts/theme-context';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<ThemeContextProvider>
		<App />
	</ThemeContextProvider>
);
