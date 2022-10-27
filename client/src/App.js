import './assets/App.css';
import { Homepage } from './components/homepage/homepage.js';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Homepage />} />
            </Routes>
        </>
    );
}

export default App;
