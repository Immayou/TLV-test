import Link from "next/link";
import s from "../styles/404.module.css";

const NotFoundPage = () => {
  return (
    <main>
      <div className="container">
        <h1 style={{ marginBottom: "20px", textAlign: "center" }}>
          This page doesn't exist
        </h1>
        <p style={{ textAlign: "center" }}>
          Go back to{" "}
          <Link href="/" className={s.linkAccent}>
            Home Page
          </Link>
        </p>
      </div>
    </main>
  );
};
export default NotFoundPage;
