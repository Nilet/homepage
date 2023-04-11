function SearchEngineSelector(props: {
    logo: string;
    name: string;
    selected: boolean;
    onSelect: (name: string) => void;
}) {
    return (
        <button
            className={`SearchEngineButton ${props.selected ? "SelectedSearchEngine" : ""}`}
            onClick={() => props.onSelect(props.name)}
        >
            <img
                src={props.logo}
                alt={`${props.name} logo`}
                className="SearchEngineLogo"
            />
            <span className="SearchEngineName">{props.name}</span>
        </button>
    );
}

export default SearchEngineSelector;
