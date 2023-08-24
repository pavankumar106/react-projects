import React from "react";

function Header() {
  const style_header = {
    backgroundColor: "#f5ba13",
    margin: "auto -16px",
    padding: "16px 32px",
    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
  };
  const style_h = {
    color: "#fff",
    fontFamily: "McLaren, cursive",
    fontWeight: "200",
  };

  return (
    <header style={style_header}>
      <h1 style={style_h}>Notes Keeper</h1>
    </header>
  );
}
export default Header;
