import { useState } from 'react'
import './App.css'
import SearchEngineSelector from './components/SearchEngineSelector'
import Links from './components/LinksWrapper'
import lain from './assets/lain.gif'

import yandexLogo from './assets/yandex.svg'
import googleLogo from './assets/google.svg'

const yandexUrl = "https://yandex.com/search/?text=";
const googleUrl = "https://www.google.com/search?q=";

function App() {
    const [selectedEngine, setSelectedEngine] = useState("Yandex");


    const submitSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            const fieldContent = event.currentTarget.value;
            let url = "";
            switch (selectedEngine) {
                case "Yandex":
                    url = yandexUrl + fieldContent
                    break;
                case "Google":
                    url = googleUrl + fieldContent
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
                    logo={yandexLogo}
                    name="Yandex"
                    selected={selectedEngine === "Yandex"}
                    onSelect={setSelectedEngine}
                />
                <SearchEngineSelector
                    logo={googleLogo}
                    name="Google"
                    selected={selectedEngine === "Google"}
                    onSelect={setSelectedEngine}
                />
                <div className='searchBarAndReverse'>
                    <input type="search" placeholder="Search..." autoFocus id="SearchField" onKeyDown={submitSearch} />
                    <a href='https://yandex.com/images/' id="ReverseImageSearch">
                    </a>
                </div>
            </div>
            <Links />
            <img className='lain' src={lain} />
        </div>
    );
}

export default App;
