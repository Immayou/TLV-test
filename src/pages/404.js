import { useRouter } from "next/router";
import Button from "@/components/button";
import { MdOutlineArrowBackIos } from "react-icons/md";

const NotFoundPage = () => {
  const router = useRouter();
  return (
    <main>
      <div className="container">
        <h1 style={{ marginBottom: "20px", textAlign: "center" }}>
          This page doesn't exist
        </h1>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <Button
            type="button"
            text="Go back"
            handleClick={() => router.back()}
            btnclass="iconButton"
            svgIcon={<MdOutlineArrowBackIos />}
          />
        </div>
      </div>
    </main>
  );
};
export default NotFoundPage;
