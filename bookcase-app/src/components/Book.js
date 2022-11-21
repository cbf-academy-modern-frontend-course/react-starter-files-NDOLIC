import React from "react";



//const [books] = useState(data);
const Book = (props) => {
  return (
    <div>
      {
        <h2> {props.book.volumeInfo.title}</h2>
      }

    </div>
  );
}
export default Book

