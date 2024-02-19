import { useState } from "react";
import "./App.css";
import Accordion from "./components/accordian/Accordion";

function App() {
  const [selected, setSelected] = useState();
  return (
    <div className="">
      {/* Accordion component  */}
      <Accordion />
    </div>
  );
}

export default App;
