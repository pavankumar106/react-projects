import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  const style = {
    position: "absolute",
    textAlign: "center",
    bottom: "0",
    width: "100%",
    height: "2.5rem",
  };
  return (
    <footer style={style}>
      <p style={{ color: " #ccc" }}>Copyright ⓒ {currentYear}</p>
    </footer>
  );
}
export default Footer;
