interface Props {
  type?: "button" | "submit" | "reset";
  text: string;
  onClick?: () => void;
  disabled?: boolean;
}
const Button = ({ type, text, onClick, disabled }: Props) => {
  return (
    <button type={type} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
