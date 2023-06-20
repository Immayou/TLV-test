import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { MdOutlineArrowBackIos } from "react-icons/md";
import Button from "@/components/button";

const NotFoundPage = () => {
  const router = useRouter();
  const { isLoggedIn } = useSelector((state) => state.profile);

  const handleBackBtnClick = () => {
    !isLoggedIn ? router.push("/login") : router.push("/");
  };

  return (
    <main>
      <div className="container">
        <h1 style={{ marginBottom: "20px", textAlign: "center" }}>
          This page doesn&apos;t exist
        </h1>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <Button
            type="button"
            text="Go back"
            handleClick={handleBackBtnClick}
            btnclass="iconButton"
            svgIcon={<MdOutlineArrowBackIos />}
          />
        </div>
      </div>
    </main>
  );
};
export default NotFoundPage;
