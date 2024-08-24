import React, { useState, useEffect } from 'react';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [startIndex, setStartIndex] = useState(0); // To track the current page index
  const maxResults = 10; // Number of results per page

  useEffect(() => {
    // Function to fetch book data from Google Books API
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=` //add name here
        );
        const data = await response.json();
        setBooks(data.items || []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching books:', error);
        setLoading(false);
      }
    };

    fetchBooks();
  }, [startIndex]);

  const handleNextPage = () => {
    setStartIndex(startIndex + maxResults);
  };

  const handlePrevPage = () => {
    if (startIndex >= maxResults) {
      setStartIndex(startIndex - maxResults);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Book List</h1>
      {books.length === 0 ? (
        <p>No books found.</p>
      ) : (
        <>
          <ul>
            {books.map((book) => (
              <li key={book.id}>
                <h2>{book.volumeInfo.title}</h2>
                <p><strong>Author(s):</strong> {book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'N/A'}</p>
                <p><strong>Publisher:</strong> {book.volumeInfo.publisher || 'N/A'}</p>
                <p><strong>Published Date:</strong> {book.volumeInfo.publishedDate || 'N/A'}</p>
                <p><strong>Description:</strong> {book.volumeInfo.description || 'No description available'}</p>
                <p><strong>Page Count:</strong> {book.volumeInfo.pageCount || 'N/A'}</p>
                <p><strong>Categories:</strong> {book.volumeInfo.categories ? book.volumeInfo.categories.join(', ') : 'N/A'}</p>
                <img
                  src={book.volumeInfo.imageLinks?.thumbnail}
                  alt={book.volumeInfo.title}
                />
              </li>
            ))}
          </ul>
          <div>
            <button onClick={handlePrevPage} disabled={startIndex === 0}>
              Previous Page
            </button>
            <button onClick={handleNextPage} disabled={books.length < maxResults}>
              Next Page
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default BookList;
