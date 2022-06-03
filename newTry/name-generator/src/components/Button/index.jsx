function Button({onClick}) {
    return (
        <div className="btn-primary" onClick={onClick}>
            <img src="" alt="" />
            <span>
                Gerar nova palavra
            </span>
        </div>
    )
}

export default Button