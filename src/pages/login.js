import { useFormik } from "formik";
import { CiLogin } from "react-icons/ci";
import Button from "@/components/button";
import Link from "next/link";
import s from "../styles/Login.module.css";

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
      <section className="container">
        <h2 className={s.section_title}>Login form</h2>
        <form onSubmit={formik.handleSubmit} className={s.form}>
          <h3 className={s.form_title}>Login</h3>
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
          <Button
            text="Login"
            type="submit"
            btnclass="btn"
            svgIcon={<CiLogin size={22} style={{ marginRight: "10" }} />}
          />
          <div className={s.bottom_box}>
            <p className={s.bottom_text}>Don't have an account?</p>
            <Link href="/registration" className={s.bottom_link}>
              Register
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
};

export default LoginPage;
