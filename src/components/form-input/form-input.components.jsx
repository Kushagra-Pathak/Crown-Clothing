import "./form-input.styles.scss";
const FormInput = ({ label, inputOptions }) => {
  return (
    <div className="group">
      <input className="form-input" {...inputOptions} />
      {label ? (
        <label
          className={`form-input-label ${
            inputOptions.value.length ? "shrink" : ""
          }`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};
export default FormInput;
