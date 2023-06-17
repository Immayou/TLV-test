import { CiLogin } from "react-icons/ci";

const Button = ({ text, icon: Icon }) => {
  return (
    <button type="submit" className="btn">
      <Icon />
      <span>{text}</span>
    </button>
  );
};

export default Button;
