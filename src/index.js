import { createRoot } from 'react-dom/client';
import App from './components/App';
import './css/style.scss'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(<App />);
