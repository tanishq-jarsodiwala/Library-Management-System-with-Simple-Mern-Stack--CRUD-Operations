import axios from "axios";
import React, { useState } from "react";

export default function Deletebook() {
  const [id, setid] = useState("");

  const clickdelete = () => {
    axios
      .delete(`http://localhost:5000/api/delete/${id}`)
      .then(alert("deleted successfully"))
      .catch((err) => console.error(err));
  };
  return (
    <>
      <h2>Delete a Book</h2>
      <input
        type="text"
        placeholder="Enter id "
        onChange={(e) => setid(e.target.value)}
      />
      <button className="delete-btn" onClick={clickdelete}>
        delete Book
      </button>
    </>
  );
}
