import React,{ useState } from "react";
import Book from "./components/Book";
import data from "./models/books.json";
import React from "react";
import BookList from "./components/BookList";
import "./index.css";

const App = (props) => {
  const [books] = useState(data);

  return books.map(book => <Book key={book.id} book={book}/>);
}
// const App = () => {
//   return (
//     <div className="container">
//       <h1 className="title">Bookcase App</h1>
//       <BookList />
//     </div>
//   );
// };

export default App;
