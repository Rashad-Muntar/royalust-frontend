interface Props {
    type: string;
    onChange: () => void;
    onBlur: () => void;
    name?: string;
    value: string;

}
const Input = ({type, onChange, onBlur, name, value}: Props) => {
    return (
        <input
        type={type}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
    )
}

export default Input;