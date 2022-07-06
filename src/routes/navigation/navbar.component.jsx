import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import CartIcon from "../../components/cart-icon/cart-icon.components";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";
import {
  NavLinkContainer,
  LinkContainer,
  LogoContainer,
  Navigation,
} from "./navbar.styles";
const NavBar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  return (
    <Fragment>
      <Navigation>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>

        <NavLinkContainer>
          <LinkContainer to="/shop">Shop</LinkContainer>
          {!currentUser ? (
            <LinkContainer to="/auth">Sign In</LinkContainer>
          ) : (
            <LinkContainer as="span" onClick={signOutUser}>
              Sign Out
            </LinkContainer>
          )}
          <CartIcon />
        </NavLinkContainer>
        {isCartOpen && <CartDropdown />}
      </Navigation>
      <Outlet />
    </Fragment>
  );
};
export default NavBar;
