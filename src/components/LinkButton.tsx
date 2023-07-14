function LinkButton(props: { logo: string, name: string, url: string }) {
    return (
        <a
            className={`button linkButton`}
            href={props.url}
        >
            <img
                src={props.logo}
                alt={`${props.name} logo`}
                className="linkLogo"
            />
            <span className="linkName">{props.name}</span>
        </a>
    )

}

export default LinkButton;
