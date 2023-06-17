import { createPortal } from "react-dom";
import { useState, useEffect, useRef } from "react";
import { useFormik } from "formik";

const Modal = ({ onModalClose }) => {
  const [mounted, setMounted] = useState(false);
  const ref = useRef();

  useEffect(() => {
    ref.current = document.querySelector("#modal-root");
    setMounted(true);
  });
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return mounted && ref.current
    ? createPortal(
        <div
          style={{
            display: "block",
            position: "fixed",
            top: "0",
            left: "0",
            paddingTop: "100px",
            width: "100%",
            height: "100%",
            overflow: "auto",
            backgroundColor: "rgba(0,0,0,0.4)",
            fontSize: "46px",
          }}
        >
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="id">ID</label>
            <input
              id="id"
              name="id"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.id}
            />
            <label htmlFor="topic">Topic</label>
            <input
              id="topic"
              name="topic"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.topic}
            />
            <label htmlFor="question_name">Question Name</label>
            <input
              id="question_name"
              name="question_name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.question_name}
            />
            <label htmlFor="question_comment">Question comment</label>
            <input
              id="question_comment"
              name="question_comment"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.question_comment}
            />
            <button type="submit">Submit</button>
            <button type="reset" onClick={() => formik.resetForm()}>
              Reset
            </button>
            <button type="button" onClick={onModalClose}>
              Cancel
            </button>
          </form>
        </div>,
        ref.current
      )
    : null;
};

export default Modal;
