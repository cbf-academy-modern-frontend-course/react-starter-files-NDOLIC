import React from 'react'

const Book = ({ book }) => {
  const {
    volumeInfo: {
      title,
      authors,
      description,
      imageLinks: { thumbnail },
    },
    saleInfo: { retailPrice },
  } = book
  const handleClick = (title) => {
    console.log(`The book ${title} was clicked`)
  }
  return (
    <div>
      <h1>{title}</h1>
      {authors.length > 1 ? <p>{authors.join(' & ')}</p> : <p>{authors}</p>}
      {retailPrice ? (
        <p>£{retailPrice && retailPrice.amount}</p>
      ) : (
        <p>No price found</p>
      )}
      <p>{description.substring(0, 400)}...</p>
      <img src={thumbnail} alt={title} />
      <button onClick={() => handleClick(title)}>Add +</button>
    </div>
  )
}
Book.defaultProps = {
  saleInfo: {
    retailPrice: {
      amount: 'No price found',
    },
  },
}

export default Book

