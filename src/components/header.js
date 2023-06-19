import Logo from "@/components/logo";
import { RxExit } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Button from "@/components/button";
import { logOutProfile } from "@/redux/Profile/profileSlice";
import { useEffect } from "react";

const Header = () => {
  const { email, isLoggedIn } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const router = useRouter();

  // useEffect(() => {
  //   if (!email) {
  //     return;
  //   }
  // }, []);

  const handleBtnExitClick = () => {
    dispatch(logOutProfile());
    router.push("/login");
  };

  return (
    <header style={{ padding: "20px 0" }}>
      <div className="container">
        {isLoggedIn && (
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
                handleClick={handleBtnExitClick}
              />
            </div>
          </div>
        )}
        {!isLoggedIn && <Logo text="TLV-test" />}
      </div>
    </header>
  );
};

export default Header;
