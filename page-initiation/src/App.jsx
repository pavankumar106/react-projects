import { useState } from "react";
import { Table } from "react-bootstrap";
import data from "./data.json";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(data.length / recordsPerPage);
  const number = [...Array(nPage + 1).keys()].slice(1);

  function prevPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function changeCurrentPage(id) {
    setCurrentPage(id);
  }
  function nextPage() {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <>
      <Table className="table">
        <thead>
          <th>ID</th>
          <th>NAME</th>
          <th>EMAIL</th>
        </thead>
        <tbody>
          {records.map((res, i) => (
            <tr key={i}>
              <td>{res.id}</td>
              <td>{res.name}</td>
              <td>{res.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <nav>
        <ul>
          <li>
            {" "}
            <a href="#" onClick={prevPage}>
              prev
            </a>{" "}
          </li>
          {number.map((num, i) => (
            <li key={i} onClick={() => changeCurrentPage(num)}>
              <a href="#">{num}</a>
            </li>
          ))}
          <li>
            {" "}
            <a href="#" onClick={nextPage}>
              next
            </a>{" "}
          </li>
        </ul>
      </nav>
    </>
  );
}

export default App;
