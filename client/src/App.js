import './assets/App.css';
import { Homepage } from './components/homepage/homepage.js';
import { useEffect, useState } from 'react';

function App() {
    const [data, setData] = useState({});
    useEffect(() => {
        // Mozna zastapic fetcha axiosem
        fetch('/examp')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className='App'>
            <Homepage></Homepage>
            <h4>
                Dane z serwera: {data.name}, {data.ex}
            </h4>
        </div>
    );
}

export default App;
