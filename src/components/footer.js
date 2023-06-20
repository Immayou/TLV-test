import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (
    <footer style={{ padding: "20px" }}>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <BiCopyright size={16} style={{ marginRight: "5px" }} />
        <p>2023</p>
      </div>
    </footer>
  );
};

export default Footer;
