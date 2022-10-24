function Input(props) {
    const { label, onChange, type, value } = props;
    return <input placeholder={label} onChange={onChange} value={value} type={type} />

}

function Button(props) {
    const { label, onClick } = props;
    return (
        <>
            <button onClick={onClick}>{label}</button>
        </>
    )
}

export { Input, Button };