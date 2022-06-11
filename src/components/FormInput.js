import "./FormInput.css";

function FormInput(props) {
  const err = !props.err;

  const getValue = (e) => {
    if (props.type === "email") {
      props.setErr((prevState) => {
        return { ...prevState, emailIsValid: true };
      });
    } else if (props.type === "text") {
      props.setErr((prevState) => {
        return { ...prevState, passwordIsValid: true };
      });
    }
    props.onValue(e.target.value);
  };

  const errBorder = err ? "err_border" : "";

  return (
    <>
      <span>
        <input
          className={errBorder}
          type={props.type}
          placeholder={`${props.placeholder} *`}
          onChange={getValue}
        />
        {err && <p className="err_messg">{props.errMessg}</p>}
      </span>
    </>
  );
}

export default FormInput;
