import React, { useState } from "react";
import axios from "axios";

export default function Addbook() {
  const [id, setid] = useState("");
  const [name, setname] = useState("");
  const [Author, setAuthor] = useState("");

  // making all 3 varialbes

  const clickadd = () => {
    axios
      .post("http://localhost:5000/api/books", { id, name, Author })
      //checking this 3 parameters
      .then(() => alert("succesfully added"))
      .catch((err) => console.error(err)); // showing error if all not well
  };

  return (
    <>
    <h2> Add Book </h2>
    <input type="text" placeholder="enter a id " onChange={(e) => setid(e.target.value)}/>
    <input type="text" placeholder="enter a name" onChange={(e) => setname(e.target.value)}/>
    <input type="text" placeholder="enter a Author" onChange={(e) => setAuthor(e.target.value)}/>
    <button onClick={clickadd}>Add Book</button>

    </>
  );


}
