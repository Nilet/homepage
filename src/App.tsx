import yandexLogo from './assets/yandex.svg'
import bingLogo from './assets/bing.svg'
import googleLogo from './assets/google.svg'
import SearchEngineSelector from './components/SearchEngineSelector'
import './App.css'

function App() {

    return (
        <div className="App">
            <div className='SearchEngineWrapper'>
                <SearchEngineSelector logo={googleLogo} name='Google'></SearchEngineSelector>
                <SearchEngineSelector logo={yandexLogo} name='Yandex'></SearchEngineSelector>
                <SearchEngineSelector logo={bingLogo} name='Bing'></SearchEngineSelector>
            </div>
        </div>
    )
}

export default App
