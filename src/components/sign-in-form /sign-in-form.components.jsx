import { useState } from "react";
import "./sign-in.styles.scss";
import {
  signInWithGooglePopUp,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.components";
import Button from "../button/button.components";

const defaultValues = { email: "", password: "" };

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultValues);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultValues);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopUp();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        alert("Incorrect Password");
      } else if (error.code === "auth/user-not-found")
        alert("User doesn't exist");
      else console.log(error);
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Have an Account?</h2>
      <span>Sign In Using Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          inputOptions={{
            type: "email",
            required: true,
            onChange: handleChange,
            name: "email",
            value: email,
          }}
        />
        <FormInput
          label="Password"
          inputOptions={{
            type: "password",
            required: true,
            onChange: handleChange,
            name: "password",
            value: password,
          }}
        />
        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button type="button" onClick={signInWithGoogle} buttonType="google">
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignIn;
