import { createPortal } from "react-dom";
import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import InputForm from "@/components/questionForm";
import s from "../styles/Modal.module.css";

const Modal = ({ onModalClose, questionToEdit }) => {
  const [mounted, setMounted] = useState(false);
  const ref = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    ref.current = document.querySelector("#modal-root");
    setMounted(true);
  }, []);

  return mounted && ref.current
    ? createPortal(
        <div className={s.overlay}>
          <section className="container">
            <h2 className={s.section_title}>Actions form</h2>
            <InputForm
              onModalClose={onModalClose}
              questionToEdit={questionToEdit}
            />
          </section>
        </div>,
        ref.current
      )
    : null;
};

export default Modal;
