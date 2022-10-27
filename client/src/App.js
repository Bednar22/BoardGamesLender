import './assets/App.css';
import { Homepage } from './components/homepage/homepage.js';
import { SignUp } from './components/login/signUp';
import { Login } from './components/login/login';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Homepage />} />
            </Routes>
            <Routes>
                <Route path='/signup' element={<SignUp />} />
            </Routes>
            <Routes>
                <Route path='/login' element={<Login />} />
            </Routes>
        </>
    );
}

export default App;
