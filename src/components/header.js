import Logo from "@/components/logo";
import { RxExit } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Button from "@/components/button";
import { logOutProfile } from "@/redux/Profile/profileSlice";
import s from "../styles/Header.module.css";

const Header = () => {
  const { email, isLoggedIn } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleBtnExitClick = () => {
    dispatch(logOutProfile());
    router.push("/login");
  };

  return (
    <header style={{ padding: "20px 0" }}>
      <div className="container">
        {isLoggedIn && (
          <div className={s.header_wrapper}>
            <Logo text="TLV-test" />
            <div className={s.content_box}>
              <p className={s.text_content}>Hi, {email}</p>
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
