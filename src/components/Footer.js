import React from "react";

const Footer = () => {
  const today = new Date();

  return (
    <div className="footer">
      <div className="footer-text">
        <p>Copyright &copy; {today.getFullYear()} by Yahan Tian </p>
      </div>
    </div>
  );
};

export default Footer;
