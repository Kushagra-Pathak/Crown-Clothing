import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import "./navbar.styles.scss";
const NavBar = () => {
  const { currentUser } = useContext(UserContext);
  currentUser
    ? console.log("User is present")
    : console.log("User is not present");
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="link-container" to="/shop">
            Shop
          </Link>
          {!currentUser ? (
            <Link className="link-container" to="/auth">
              Sign In
            </Link>
          ) : (
            <span className="link-container" onClick={signOutUser}>
              Sign Out
            </span>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default NavBar;
