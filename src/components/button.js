import { CiLogin } from "react-icons/ci";

const Button = ({ text, svgIcon, type, handleClick, btnclass }) => {
  return (
    <button type={type} className={btnclass} onClick={handleClick}>
      {svgIcon}
      <span>{text}</span>
    </button>
  );
};

export default Button;
