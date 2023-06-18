import { ErrorMessage } from "formik";

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={(message) => <p className="error_message">{message}</p>}
    />
  );
};

export default FormError;
