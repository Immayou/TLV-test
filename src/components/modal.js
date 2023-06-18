import { createPortal } from "react-dom";
import { useState, useEffect, useRef } from "react";
import { useFormik } from "formik";
import { nanoid } from "nanoid";
import Button from "@/components/button";
import s from "../styles/Modal.module.css";

const Modal = ({ onModalClose }) => {
  const [mounted, setMounted] = useState(false);
  const ref = useRef();
  const custom_id = nanoid();

  useEffect(() => {
    ref.current = document.querySelector("#modal-root");
    setMounted(true);
  });
  const formik = useFormik({
    initialValues: {
      id: custom_id,
      topic: "",
      question_name: "",
      comment: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return mounted && ref.current
    ? createPortal(
        <div className={s.overlay}>
          <section className="container">
            <h2 className={s.section_title}>Actions form</h2>
            <form onSubmit={formik.handleSubmit} className={s.form}>
              <h3 className={s.form_title}>Edit/Create questions</h3>
              <div className={s.inputBox}>
                <label htmlFor="id" className={s.label}>
                  ID
                </label>
                <input
                  id="id"
                  name="id"
                  type="number"
                  // onChange={formik.handleChange}
                  value={formik.values.id}
                  className={s.input}
                />
              </div>
              <div className={s.inputBox}>
                <label htmlFor="topic" className={s.label}>
                  Topic
                </label>
                <input
                  id="topic"
                  name="topic"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.topic}
                  className={s.input}
                />
              </div>
              <div className={s.inputBox}>
                <label htmlFor="question_name" className={s.label}>
                  Question Name
                </label>
                <input
                  id="question_name"
                  name="question_name"
                  type="text"
                  // onChange={formik.handleChange}
                  value={formik.values.question_name}
                  className={s.input}
                />
              </div>
              <div className={s.inputBox}>
                <label htmlFor="comment" className={s.label}>
                  Question comment
                </label>
                <input
                  id="comment"
                  className={s.input}
                  type="text"
                  name="comment"
                  rows="6"
                  onChange={formik.handleChange}
                  placeholder="Enter your comment..."
                  value={formik.values.comment}
                />
              </div>
              <div className={s.bottomBox}>
                <Button type="submit" text="Submit" btnclass="btn" />
                <Button
                  type="reset"
                  text="Clear"
                  btnclass="btn"
                  handleClick={() => formik.resetForm()}
                />
                <Button
                  type="button"
                  text="Cancel"
                  btnclass="btn"
                  handleClick={onModalClose}
                />
              </div>
            </form>
          </section>
        </div>,
        ref.current
      )
    : null;
};

export default Modal;
