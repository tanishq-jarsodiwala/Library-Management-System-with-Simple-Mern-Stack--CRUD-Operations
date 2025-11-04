const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const mysql = require("mysql2");

// These are several methods available

const app = express(); // Creating the object of Express
app.use(cors()); // Middleware for cross-origin connection
app.use(bodyparser.json()); // Parsing JSON structure for storing the data

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "libdb"
});

// Connecting to MySQL database
db.connect((err) => {
  if (err) {
    console.log("Error is", err);
  } else {
    console.log("DB connected");
  }
});

// Get all books
app.get("/api/books", (req, res) => {
  const sql = "SELECT * FROM books";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// Add books to the database
app.post("/api/books", (req, res) => {
  const { id, name, Author } = req.body;

  // If something is missing, show an error
  if (!id || !name || !Author) {
    return res.status(400).json({ message: "Required all data" });
  }

  // Adding the book to the database
  const sql = "INSERT INTO books (id, name, Author, ava) VALUES (?, ?, ?, ?)";
  db.query(sql, [id, name, Author, true], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: "Book added successfully" });
  });
});

// Update book data
app.post("/api/books/:id", (req, res) => {
  const bookid = parseInt(req.params.id); // Convert string to integer
  const { name, Author } = req.body;

  // Update query — fixed table name and removed extra comma
  const sql = "UPDATE books SET name = ?, Author = ? WHERE id = ?";
  db.query(sql, [name, Author, bookid], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Book not found" });

    res.json({ message: "Book updated successfully" });
  });
});

// Delete a book
app.delete("/api/delete/:id", (req, res) => {
  const bookid = parseInt(req.params.id);

  // Delete query — removed array logic and undefined variable
  const sql = "DELETE FROM books WHERE id = ?";
  db.query(sql, [bookid], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Book not found" });

    res.json({ message: "Book deleted successfully" });
  });
});

// Start the server
app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});