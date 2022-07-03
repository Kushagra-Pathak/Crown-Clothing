import SignIn from "../../components/sign-in-form /sign-in-form.components";
import SignUp from "../../components/sign-up-form/sign-up-form.components";
import "./authentication.styles.scss";
const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignIn />
      <SignUp />
    </div>
  );
};
export default Authentication;

/* 
  FOR GOOGLE REDIRECT
  useEffect(async () => {
    const response = await getRedirectResult(auth);
    if (response) {
      const userDocRef = await createUserDocumentFromAuth(response.user);
    }
  }, [])
  <button onClick={signInWithGoogleRedirect}>
        Sign In with Google Redirect
      </button>;
  */
