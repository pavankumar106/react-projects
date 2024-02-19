import React from "react";
import "./Accordion.css";
import data from "./data.js";

const Accordion = () => {
  return (
    <div className="wrapper">
      <div className="accordion">
        {data.length > 0 ? (
          <>
            {data.map((item) => (
              <div key={item.id}>
                <div>{item.question}</div>
                <div>{item.answer}</div>
              </div>
            ))}
          </>
        ) : (
          <>No data found</>
        )}
      </div>
    </div>
  );
};

export default Accordion;
