// Component
import FormInput from "./FormInput";
import Response from "./Response";
import CheckBox from "./CheckBox";

// Hooks
import usePost from "../hooks/use-post";
import { useState } from "react";

// CSS
import "./Form.css";

function Form() {
  // State for storing form values and validity
  const [formValues, setFormValues] = useState({
    emailIsValid: true,
    passwordIsValid: true,
  });

  // Store Status of form sumbission
  const [formStatus, setFormStatus] = useState({ formSubmission: false });

  // Token
  const [token, setToken] = useState("");

  // Post Hook
  const [postRequest] = usePost();

  // Get the value of email input
  const EmailValue = (val) => {
    return setFormValues((prevState) => {
      return { ...prevState, email: val.trim() };
    });
  };

  // Get the value of password input
  const PwdValue = (val) => {
    return setFormValues((prevState) => {
      return { ...prevState, password: val.trim() };
    });
  };

  // Form Submit function
  const submitHandler = (e) => {
    e.preventDefault();

    setFormValues((prevState) => {
      return { ...prevState, emailIsValid: true, passwordIsValid: true };
    });

    // if both the inputs are empty 
    if (formValues.email === undefined && formValues.password === undefined) {
      setFormValues((prevState) => {
        return { ...prevState, emailIsValid: false, passwordIsValid: false };
      });
      return;
    }

    // if email is in valid 
    if (formValues.email === undefined || !formValues.email.includes("@")) {
      setFormValues((prevState) => {
        return { ...prevState, emailIsValid: false };
      });
      return;
    }

    // if password is in valid 
    if (formValues.password === undefined || formValues.password.length < 8) {
      setFormValues((prevState) => {
        return { ...prevState, passwordIsValid: false };
      });
      return;
    }

    const logInData = {
      email: formValues.email,
      password: formValues.password,
    };

    // Set status pending 
    setFormStatus({
      formSubmission: true,
      messg: "Pending...",
      class: "response_pending",
    });

    const post = postRequest({
      url: "https://reacy-meetups-default-rtdb.firebaseio.com/user.json",
      data: logInData,
    });

    post.then((data) => {
      return setToken(data);
    });

    // Set status success
    setFormStatus({
      formSubmission: true,
      messg: "Success",
      class: "response_success",
      sub: token,
    });
  };
  return (
    <div className="form">
      <form action="" onSubmit={submitHandler}>
        <h1>Welcome Back</h1>
        <p className="form_sub">Sub-title text goes here</p>
        {formStatus.formSubmission && (
          <Response
            messg={formStatus.messg}
            statusClass={formStatus.class}
            subMessg={formStatus.sub}
          />
        )}
        <div className="form_inputs">
          <FormInput
            type="email"
            placeholder="Email Address"
            errMessg="Please enter a valid email."
            onValue={EmailValue}
            err={formValues.emailIsValid}
            setErr={setFormValues}
          />
          <FormInput
            type="text"
            placeholder="Password"
            errMessg="Password must contain atleast 8 characters."
            onValue={PwdValue}
            err={formValues.passwordIsValid}
            setErr={setFormValues}
          />
        </div>
        <button className="form_btn" type="submit">
          Login
        </button>
        <div className="pwd_setting">
          <div>
            <CheckBox />
          </div>
          <a href="#forgot">Forgot Password?</a>
        </div>
      </form>
    </div>
  );
}

export default Form;
