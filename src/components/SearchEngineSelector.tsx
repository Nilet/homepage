function SearchEngineSelector(props: { logo: string, name: string}) {
    return (
    <button className="SearchEngineButton">
        <img src={props.logo} alt={props.name + " logo"} className="SearchEngineLogo"/>
        <span className="SearchEngineName">{props.name}</span>
    </button>
    );
}

export default SearchEngineSelector;
