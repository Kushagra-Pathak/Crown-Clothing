import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
import { async } from "@firebase/util";
import SignUp from "../../components/sign-up-form/sign-up-form.components";
const SignIn = () => {
  /* FOR GOOGLE REDIRECT
  useEffect(async () => {
    const response = await getRedirectResult(auth);
    if (response) {
      const userDocRef = await createUserDocumentFromAuth(response.user);
    }
  }, [])
  <button onClick={signInWithGoogleRedirect}>
        Sign In with Google Redirect
      </button>;*/

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In with Google PopUp</button>
      <h1>Sign Up Using Email and Password</h1>
      <SignUp />
    </div>
  );
};
export default SignIn;
