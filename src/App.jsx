import { Outlet } from 'react-router-dom';

import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default App;
