import React from "react";

import "./custom-button.styles.scss";

//children itu adalah value ditengah tag misal liat di sign-in.component yg pake custom button
const CustomButton = ({ children, ...otherProps }) => (
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
