import React from "react";

import "./custom-button.styles.scss";

//children itu adalah value ditengah tag misal liat di sign-in.component yg pake custom button
const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
    {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
