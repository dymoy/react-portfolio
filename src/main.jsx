import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

import App from './App';
import About from './pages/About.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Resume from './pages/Resume.jsx';
import Contact from './pages/Contact.jsx';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([{
	path: '/',
	element: <App />,
	children: [
		{
			index: true,
			element: <About />,
		},
		{
			path: 'portfolio',
			element: <Portfolio />
		},
		{
			path: 'resume',
			element: <Resume />
		},
		{
			path: 'contact-me',
			element: <Contact />
		}
	],
}]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  	<RouterProvider router={router}/>
);