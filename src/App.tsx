import yandexLogo from './assets/yandex.svg'
import googleLogo from './assets/google.svg'
import { useState } from 'react'
import SearchEngineSelector from './components/SearchEngineSelector'
import './App.css'

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
            </div>
            <input type="search" placeholder="Search..." autoFocus id="SearchField" onKeyDown={submitSearch} />
            <a href='https://yandex.com/images/' id="ReverseImageSearch">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 13C21 10.3333 20.5 8 20 7.66667C19.6796 7.45303 18.1268 7.2394 16 7.11352C14.8083 7.04298 17 5 12 5C7 5 9.19168 7.04298 8 7.11352C5.87316 7.2394 4.32045 7.45303 4 7.66667C3.5 8 3 10.3333 3 13C3 15.6667 3.5 18 4 18.3333C4.5 18.6667 8 19 12 19C16 19 19.5 18.6667 20 18.3333C20.5 18 21 15.6667 21 13Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </a>
        </div>
    );
}

export default App;
