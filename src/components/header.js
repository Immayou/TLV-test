import Logo from "@/components/logo";
import { RxExit } from "react-icons/rx";
import { useSelector } from "react-redux";
import Button from "@/components/button";
import { useEffect } from "react";

const Header = () => {
  const { email } = useSelector((state) => state.profileReducer);
  useEffect(() => {
    if (!email) {
      return;
    }
  }, [email]);

  return (
    <header style={{ padding: "20px 0" }}>
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Logo text="TLV-test" />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p
              style={{
                marginRight: "10px",
              }}
            >
              Hi, {email}
            </p>
            <Button
              svgIcon={<RxExit size={22} />}
              type="button"
              btnclass="iconButton"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
