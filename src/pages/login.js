import { Formik, Form, Field } from "formik";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CiLogin } from "react-icons/ci";
import * as Yup from "yup";
import { logInProfile } from "@/redux/Profile/profileSlice";
import Button from "@/components/button";
import FormError from "@/components/formError";
import Link from "next/link";
import { useRouter } from "next/router";
import MoonLoader from "react-spinners/MoonLoader";
import s from "../styles/Login.module.css";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const schema = Yup.object().shape({
  email: Yup.string().email().required("Required!"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "must contain 8 characters, one uppercase, one lowercase, one number and one special case character"
    )
    .required("Required!"),
});

const LoginPage = () => {
  const [isLoginning, setIsLoginning] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.profile);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!(router.pathname === "/login" && isLoggedIn)) {
      return;
    }
    router.push("./");
  }, [isLoggedIn, router]);

  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <main className={s.section_content}>
      <section className="container">
        <h2 className={s.section_title}>Login form</h2>
        {!isLoginning && (
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values, { resetForm }) => {
              dispatch(logInProfile(values));
              router.push("./");
              setIsLoginning(!isLoginning);
              resetForm();
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleSubmit,
              isSubmitting,
              resetForm,
            }) => {
              return (
                <Form onSubmit={handleSubmit} className={s.form}>
                  <h3 className={s.form_title}>Login</h3>
                  <div className={s.inputBox}>
                    <label htmlFor="email" className={s.label}>
                      Email Address
                    </label>
                    <Field
                      autoComplete="off"
                      as="input"
                      id="email"
                      name="email"
                      onChange={handleChange}
                      value={values.email}
                      className={s.input}
                      placeholder="Enter your email"
                      required
                    />
                    {errors.email && touched.email ? (
                      <FormError name="email" component="p" />
                    ) : null}
                  </div>
                  <div className={s.inputBox}>
                    <label htmlFor="password" className={s.label}>
                      Password
                    </label>
                    <Field
                      autoComplete="off"
                      as="input"
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      onChange={handleChange}
                      value={values.password}
                      className={s.input}
                      required
                    />{" "}
                    {errors.password && touched.password ? (
                      <FormError name="password" component="p" />
                    ) : null}
                  </div>
                  <Button
                    text="Login"
                    type="submit"
                    btnclass="btn"
                    svgIcon={
                      <CiLogin size={22} style={{ marginRight: "10" }} />
                    }
                  />
                  <div className={s.bottom_box}>
                    <p className={s.bottom_text}>Don&apos;t have an account?</p>
                    <Link href="/registration" className={s.bottom_link}>
                      Register
                    </Link>
                  </div>
                </Form>
              );
            }}
          </Formik>
        )}
        <MoonLoader
          speedMultiplier={0.5}
          color="gray"
          loading={isLoginning}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </section>
    </main>
  );
};

export default LoginPage;
