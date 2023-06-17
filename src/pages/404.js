import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div>
      <h1>This page doesn't exist</h1>
      <p>
        Go to <Link href="/">Home Page</Link>
      </p>
    </div>
  );
};
export default NotFoundPage;
