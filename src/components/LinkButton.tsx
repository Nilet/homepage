function LinkButton(props: { logo: string, name: string, url: string }) {
    function redirect() {
            window.location.href = props.url;
        }

    return (
        <button
            className={`linkButton`}
            onClick={redirect}
        >
            <img
                src={props.logo}
                alt={`${props.name} logo`}
                className="linkLogo"
            />
            <span className="linkName">{props.name}</span>
        </button>
    )

}

export default LinkButton;
