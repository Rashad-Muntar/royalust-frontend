import { Puff } from "react-loader-spinner";
interface Props{
    color?:string
}
const Spinner = ({color}:Props) => {
  return (
    <Puff
      height="80"
      width="80"
      radius={1}
      color={color}
      ariaLabel="puff-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};

export default Spinner;
