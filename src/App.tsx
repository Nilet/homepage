import yandexLogo from './assets/yandex.svg'
import bingLogo from './assets/bing.svg'
import googleLogo from './assets/google.svg'
import cameraSvg from './assets/camera.svg'
import { useState } from 'react'
import SearchEngineSelector from './components/SearchEngineSelector'
import './App.css'

const yandexUrl = "https://yandex.com/search/?text=";
const bingUrl = "https://www.bing.com/search?q=";
const googleUrl = "https://www.google.com/search?q=";

function App() {
    const [selectedEngine, setSelectedEngine] = useState("Google");

    const handleEngineSelect = (engineName: string) => {
        setSelectedEngine(engineName);
        console.log(engineName);
    };

    const submitSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            const inputValue = event.currentTarget.value;
            let url = "";
            switch (selectedEngine) {
                case "Yandex":
                    url = yandexUrl + inputValue
                    break;
                case "Bing":
                    url = bingUrl + inputValue
                    break;
                case "Google":
                    url = googleUrl + inputValue
                    break;
                default:
                    break;
            }
            window.location.href = url;
        }
    }

    return (
        <div className="App">
            <div className="SearchEngineWrapper">
                <SearchEngineSelector
                    logo={googleLogo}
                    name="Google"
                    selected={selectedEngine === "Google"}
                    onSelect={handleEngineSelect}
                />
                <SearchEngineSelector
                    logo={yandexLogo}
                    name="Yandex"
                    selected={selectedEngine === "Yandex"}
                    onSelect={handleEngineSelect}
                />
                <SearchEngineSelector
                    logo={bingLogo}
                    name="Bing"
                    selected={selectedEngine === "Bing"}
                    onSelect={handleEngineSelect}
                />
            </div>
            <input type="search" placeholder="Search..." autoFocus id="SearchField" onKeyDown={submitSearch} />
            <a id="ReverseImageSearch"> <img src={cameraSvg}></img></a>
        </div>
    );
}

export default App;
