import ColourPicker from './components/ColourPicker';
import './styles/App.css';

function App() {
    // let warning = "Your browser does not support EyeDropper API"

    // const checkAPI = () => {
    //     if ("EyeDropper" in window) {
    //         return false
    //     }
    // }

    return (
        <div className="App">
            <ColourPicker />
        </div>
    );
}

export default App;
