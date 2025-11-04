import logo from "./logo.svg";
import "./App.css";
import Booklist from "./components/Booklist";
import Addbook from "./components/Addbook";
import Updatebook from "./Updatebook";
import Deletebook from "./components/Deletebook";

import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="main-div">
      <h1 className="main-heading">Library Management System</h1>
      <nav className="nav-bar">
        <Link to="/" className="nav-link">View Books</Link> | {""}
        <Link to="/add" className="nav-link">Add Book</Link> |{""}
        <Link to="/update" className="nav-link">Update Book</Link> |{""}
        <Link to="/delete" className="nav-link">Delete Book</Link>
      </nav>
      <hr/>
      <Routes>
        <Route path ="/" element={<Booklist/>}/>
        <Route path="/add" element={<Addbook/>}/>
        <Route path= "/update" element={<Updatebook/>}/>
        <Route path="/delete" element= {<Deletebook/>}/>

      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
