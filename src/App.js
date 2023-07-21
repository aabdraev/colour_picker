import { useEffect, useState } from 'react';
import ColourPicker from './components/ColourPicker';
import './styles/App.css';

function App() {
    const [isAccessible, setIsAccessible] = useState(false)

    useEffect(() => {
        if ("EyeDropper" in window)
            setIsAccessible(true)
    }, [])

    return (
        <div className="App">
            {isAccessible
                ?
                <ColourPicker />
                : <h1>Your browser does not support EyeDropper API</h1>
            }
        </div>
    );
}

export default App;
