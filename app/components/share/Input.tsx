import { ChangeEvent } from "react";

interface Props {
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value: string;
}
const Input = ({ type, onChange, onBlur, name, value }: Props) => {
  return (
    <input
      type={type}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      className="border-2 border-gray-300 rounded-lg p-2 w-80 mb-2"
    />
  );
};

export default Input;
