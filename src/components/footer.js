import { BiCopyright } from "react-icons/bi";
import s from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={`${"container"} ${s.content_wrapper}`}>
        <BiCopyright size={16} className={s.copyright_icon} />
        <p>2023</p>
      </div>
    </footer>
  );
};

export default Footer;
