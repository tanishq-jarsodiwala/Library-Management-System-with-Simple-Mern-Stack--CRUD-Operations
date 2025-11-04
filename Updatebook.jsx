import axios from "axios";
import React, { useState } from "react";

export default function Updatebook() {
  const [id, setid] = useState("");
  const [name, setname] = useState("");
  const [Author, setAuthor] = useState("");

  // creating 3 basic parameters

  const clickupdate = () => {
    axios
      .post(`http://localhost:5000/api/books/${id}`, { name, Author })
      .then(() => alert("update succesfully"))
      .catch(() => console.error("error"));
  };

  return (
    <>
      <h2>Update a book</h2>
      <input
        type="text"
        placeholder="enter id"
        onChange={(e) => setid(e.target.value)}
      />
      <input
        type="text"
        placeholder="new name"
        onChange={(e) => setname(e.target.value)}
      />
      <input
        type="text"
        placeholder="new Author"
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button onClick={clickupdate}>Update a book</button>
    </>
  );
}
