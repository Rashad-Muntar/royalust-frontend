interface Props {
  type?: "button" | "submit" | "reset";
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  style?:string
}

const defaultStyles = {
  padding: '10px 20px',
  fontSize: '16px',
  fontWeight: 'bold',
  borderRadius: '4px',
};



const solidBtn= "bg-black text-white rounded-lg p-2 w-80"
const outlineBtn= "border-2 text-white border-gray-300 rounded-lg p-2 w-80 mb-2"

const Button = ({ type, text, onClick, disabled, style }: Props) => {

  return (
    <button className={`px-[10px] py-[12px] cursor:point rounded-lg ${style}`} type={type} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
