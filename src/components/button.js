import { CiLogin } from "react-icons/ci";

const Button = ({
  text,
  svgIcon,
  type,
  handleClick,
  btnclass,
  isAble = false,
}) => {
  return (
    <button
      type={type}
      className={btnclass}
      onClick={handleClick}
      disabled={isAble}
    >
      {svgIcon}
      <span>{text}</span>
    </button>
  );
};

export default Button;
