import { useFormik } from "formik";
import { CiLogin } from "react-icons/ci";
import Link from "next/link";
import s from "../styles/LoginPage.module.css";

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <main className={s.section_content}>
      <form onSubmit={formik.handleSubmit} className={s.form}>
        <h1 className={s.section_title}>Login form</h1>
        <h2 className={s.logo}>TLV-test</h2>
        <div className={s.inputBox}>
          <label htmlFor="email" className={s.label}>
            Email Address
          </label>
          <input
            autoComplete="off"
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className={s.input}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className={s.inputBox}>
          <label htmlFor="password" className={s.label}>
            Password
          </label>
          <input
            autoComplete="off"
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            onChange={formik.handleChange}
            value={formik.values.password}
            className={s.input}
            required
          />
        </div>
        <button type="submit" className={s.login_btn}>
          <CiLogin size={22} style={{ marginRight: "5px" }} />
          <span>Login</span>
        </button>
        <div className={s.bottom_box}>
          <p className={s.bottom_text}>Don't have an account?</p>
          <Link href="/registration" className={s.bottom_link}>
            Register
          </Link>
        </div>
      </form>
    </main>
  );
};

export default LoginPage;
