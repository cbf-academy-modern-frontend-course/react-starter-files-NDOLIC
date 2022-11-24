import React,{ useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Book from "./components/Book";
import data from "./models/books.json";
import BookList from "./components/BookList";
import Header from "./components/Header";
import About from ".pages/About"
import "./index.css";

const App = (props) => {
  <BrowserRouter>
      <Routes>
        <Route exact path="/" render={() => (
          <>
          <Header />
          <h2> Welcome to the Bookcase App</h2>
          <BookList books={books} />
          </>
        )} />
        <Route exact path="/" render={() => (
          <>
          <BookList/>
          <h2> Welcome to the Bookcase App</h2>
          <BookList books={books}/>
          </>
        )} />
        <Route exact path="/" element={About}></Route>
      </Routes>

  </BrowserRouter>
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
