import ReactDOM from 'react-dom/client';
import { Application } from '~/app/application';

const container = document.querySelector('#root') as HTMLElement;

const root = ReactDOM.createRoot(container);

root.render(<Application />);
