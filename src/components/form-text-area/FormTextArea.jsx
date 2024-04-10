import "./FormTextArea.css";

const FormTextArea = ({ name, rows, placeholder }) => {
  return (
    <textarea
      name={name}
      rows={rows}
      placeholder={placeholder}
      className="form-text-area"
      autoComplete="on"
    />
  );
};

export default FormTextArea;
