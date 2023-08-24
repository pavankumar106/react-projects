import React from "react";

function Note(props) {
  const style_div = {
    background: "#fff",
    borderRadius: "7px",
    boxShadow: "0 2px 5px #ccc",
    padding: "10px",
    width: "240px",
    margin: "16px",
    float: "left",
  };
  const style_h1 = {
    fontSize: "1.1rem",
    marginBottom: "6px",
  };
  const style_p = {
    fontSize: "1.1rem",
    marginBottom: "10px",
    whiteSpaces: "pre-wrap",
    wordWrap: "break-word",
  };

  return (
    <div style={style_div}>
      <h1 style={style_h1}>{props.title}</h1>
      <p style={style_p}>{props.content}</p>
    </div>
  );
}
export default Note;
