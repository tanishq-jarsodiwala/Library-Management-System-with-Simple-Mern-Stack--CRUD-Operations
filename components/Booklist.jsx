import axios from "axios";
import react, { useEffect, useState } from "react";

export default function Booklist() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/books")
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h2>All Books</h2>
      <table border="1" cellPadding="11">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Author</th>
            <th>Available</th>
          </tr>
        </thead>

        <tbody>
            {books.map(b=>(
                <tr key={b.id}>
                    <td>{b.id}</td>
                    <td>{b.name}</td>
                    <td>{b.Author}</td>
                    <td>{b.ava ? "Yes" :"No"}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
