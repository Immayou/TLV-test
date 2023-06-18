import { Formik, Form, Field } from "formik";
import { useState, useEffect, useRef } from "react";
import { CiLogin } from "react-icons/ci";
import * as Yup from "yup";
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
  email: Yup.string().email().required(),
  password: Yup.string().min(6).max(12).required(),
});

const LoginPage = () => {
  const [isLogined, setIsLogined] = useState(false);
  const router = useRouter();

  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <main className={s.section_content}>
      <section className="container">
        <h2 className={s.section_title}>Login form</h2>
        {!isLogined && (
          <Formik
            initialValues={initialValues}
            onSubmit={(values, { resetForm }) => {
              alert(JSON.stringify(values, null, 2));
              router.push("./");
              setIsLogined(!isLogined);
              resetForm();
            }}
            validationSchema={schema}
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
                    <p className={s.bottom_text}>Don't have an account?</p>
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
          loading={isLogined}
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
