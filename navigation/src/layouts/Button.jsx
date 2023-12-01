import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className="px-6 py-1 hover:text-[#ab6cab] transition-all rounded-full border-white bg-[#ffdcab]">
        {props.title}
      </button>
    </div>
  );
};

export default Button;
