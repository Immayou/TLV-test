import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { getRandomInt } from "../aditional_functions/functions";
import * as Yup from "yup";
import { addQuestion, editQuestion } from "@/redux/Questions/questionsSlice";
import FormError from "@/components/formError";
import Button from "@/components/button";
import s from "../styles/Modal.module.css";

const schema = Yup.object().shape({
  topic: Yup.string()
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .min(3, "Too Short! Minimum 3 characters")
    .max(40, "Too Long! Maximum 40 characters")
    .required("Required!"),
  question_name: Yup.string()
    .min(2, "Too Short! Minimum 3 characters")
    .max(40, "Too Long! Maximum 40 characters")
    .required("Required!"),
  comment: Yup.string()
    .min(3, "Too short! Minimum 3 characters")
    .max(120, "Too long! Maximum 120 characters"),
});

const InputForm = ({ onModalClose, questionToEdit }) => {
  const custom_id = getRandomInt(100);
  const dispatch = useDispatch();
  const initialValuesForEdit = {
    topic: questionToEdit.topic,
    question_name: questionToEdit.question_name,
    comment: questionToEdit.comment,
  };

  const initialValues = {
    topic: "",
    question_name: "",
    comment: "",
  };

  return (
    <Formik
      initialValues={questionToEdit ? initialValuesForEdit : initialValues}
      validationSchema={schema}
      onSubmit={(values, { resetForm }) => {
        {
          questionToEdit
            ? dispatch(editQuestion({ ...values, id: questionToEdit.id }))
            : dispatch(addQuestion({ id: custom_id, ...values }));
        }
        resetForm();
        onModalClose();
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
          <Form className={s.form} onSubmit={handleSubmit}>
            <h3 className={s.form_title}>Edit/Create questions</h3>
            <div className={s.inputBox}>
              <p className={s.label}>ID</p>
              <p className={s.input}>
                {questionToEdit ? questionToEdit.id : custom_id}
              </p>
            </div>
            <div className={s.inputBox}>
              <label htmlFor="topic" className={s.label}>
                Topic
              </label>
              <Field
                as="input"
                id="topic"
                name="topic"
                type="text"
                onChange={handleChange}
                value={values.topic}
                className={s.input}
                placeholder="Enter topic"
              />
              {errors.topic && touched.topic ? (
                <FormError name="topic" component="p" />
              ) : null}
            </div>
            <div className={s.inputBox}>
              <label htmlFor="question_name" className={s.label}>
                Question Name
              </label>
              <Field
                as="input"
                id="question_name"
                name="question_name"
                type="text"
                onChange={handleChange}
                value={values.question_name}
                placeholder="Enter your question name..."
                className={s.input}
              />
              {errors.question_name && touched.question_name ? (
                <FormError name="question_name" component="p" />
              ) : null}
            </div>
            <div className={s.inputBox}>
              <label htmlFor="comment" className={s.label}>
                Question comment
              </label>
              <Field
                as="textarea"
                id="comment"
                className={s.input}
                type="text"
                name="comment"
                rows="6"
                onChange={handleChange}
                placeholder="Enter your comment..."
                value={values.comment}
              />
              {errors.comment && touched.comment ? (
                <FormError name="comment" component="p" />
              ) : null}
            </div>
            <div></div>
            <div className={s.bottomBox}>
              <Button
                type="submit"
                isAble={isSubmitting}
                text={questionToEdit ? "Edit" : "Submit"}
                btnclass="btn"
              />
              <Button
                type="reset"
                text="Clear"
                btnclass="btn"
                handleClick={() => resetForm()}
                isAble={isSubmitting}
              />
              <Button
                type="button"
                text="Cancel"
                btnclass="btn"
                handleClick={onModalClose}
                isAble={isSubmitting}
              />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default InputForm;
