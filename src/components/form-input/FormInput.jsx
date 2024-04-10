import "./FormInput.css";

const FormInput = ({ name, type, placeholder, classLabel }) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      className={`form-input ${classLabel}`}
      autoComplete="on"
    />
  );
};

export default FormInput;
